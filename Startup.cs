using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using scrabble.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Newtonsoft;
using Microsoft.AspNetCore.SignalR;
using scrabble.Hubs;

namespace scrabble
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddDefaultIdentity<IdentityUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddRazorPages(options =>
            {
                options.Conventions.AuthorizePage("/Games");
                options.Conventions.AuthorizePage("/Game");
                options.Conventions.AuthorizePage("/ChooseTeam");
                options.Conventions.AddPageRoute("/Game", "/Games/{GameId}");
                options.Conventions.AddPageRoute("/ChooseTeam", "/Games/{GameId}/Choice");
            });
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app, 
            IWebHostEnvironment env, 
            ApplicationDbContext dbContext,
            IHubContext<ChatHub> hubContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/rest/games", async context =>
                {
                    var formData = await context.Request.ReadFormAsync();

                    if (!int.TryParse((string)formData["teams"], out int teams))
                    {
                        await context.Response.WriteAsync(@"{""success"":false}");
                        return;
                    }

                    var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                        .UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
                        .Options;

                    using var dbContext = new ApplicationDbContext(options);

                    var game = new GameState();

                    dbContext.Add(game);
                    await dbContext.SaveChangesAsync();

                    var responseData = new JObject(
                        new JProperty("success", true),
                        new JProperty("id", game.Id));

                    await context.Response.WriteAsync(responseData.ToString());
                });

                endpoints.MapGet("/rest/games/{id}", async context =>
                {
                    var gameId = (string)context.Request.RouteValues["id"];
                    var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                        .UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
                        .Options;

                    using var dbContext = new ApplicationDbContext(options);

                    var game = await dbContext.Games.FirstOrDefaultAsync(g => g.Id == gameId);
                    if (game == null)
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "Game not found"));

                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var gameData = game.ToJson();

                    var responseData = new JObject(
                        new JProperty("success", true),
                        new JProperty("data", gameData));

                    await context.Response.WriteAsync(responseData.ToString());
                });

                endpoints.MapPost("/rest/games/{id}", async context =>
                {
                    var gameId = (string)context.Request.RouteValues["id"];
                    var formData = await context.Request.ReadFormAsync();
                    var actions = (string)formData["actions[]"] ?? "";
                    var actionIndex = int.Parse((string)formData["actionIndex"]);
                    var teams = int.Parse((string)formData["teams"]);
                    var timestamp = long.Parse((string)formData["timestamp"]);

                    if (string.IsNullOrWhiteSpace(actions))
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "'actions' list must contain at least one item"));

                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                        .UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
                        .Options;

                    using var dbContext = new ApplicationDbContext(options);

                    var game = await dbContext.Games.FirstOrDefaultAsync(x => x.Id == gameId);

                    if (game == null)
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "Game doesn't exist"));

                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    if (game.Timestamp != timestamp)
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "You do not have the current version of this object"));

                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var newTimestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

                    game.Actions = actions;
                    game.ActionIndex = actionIndex;
                    game.Timestamp = newTimestamp;

                    try
                    {
                        dbContext.Update(game);
                        dbContext.SaveChanges();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "Game not found"));

                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var response = new JObject();
                    response["success"] = true;
                    response["data"] = game.ToJson();
                    response["timestamp"] = newTimestamp;

                    await context.Response.WriteAsync(response.ToString());

                    await hubContext.Clients.All.SendAsync("ReceiveMessage", game);
                });

                endpoints.MapRazorPages();
                endpoints.MapHub<ChatHub>("/chatHub");
            });
        }
    }
}
