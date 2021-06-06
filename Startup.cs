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
                options.Conventions.AddPageRoute("/Game", "/Game/{id}");
                options.Conventions.AddPageRoute("/ChooseTeam", "/Game/{id}/choice");
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext dbContext)
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

                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var gameData = new JObject(
                        new JProperty("actionIndex", game.ActionIndex),
                        new JProperty("teams", game.Teams),
                        new JProperty("id", game.Id),
                        new JProperty("actions", game.Actions.Split(',')));

                    var responseData = new JObject(
                        new JProperty("success", true),
                        new JProperty("data", gameData));

                    await context.Response.WriteAsync(responseData.ToString());
                });

                endpoints.MapPost("/rest/games/{id}", async context =>
                {
                    var gameId = (string)context.Request.RouteValues["id"];
                    var formData = await context.Request.ReadFormAsync();
                    var actions = (string)formData["actions"] ?? "";
                    var actionIndex = int.Parse((string)formData["actionIndex"]);
                    var teams = int.Parse((string)formData["teams"]);

                    if (string.IsNullOrWhiteSpace(actions))
                    {
                        var errorData = new JObject(
                            new JProperty("success", false),
                            new JProperty("errorMessage", "'actions' list must contain at least one item"));

                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    var game = new GameState()
                    {
                        Id = gameId,
                        Actions = actions,
                        ActionIndex = actionIndex,
                        Teams = teams,
                    };

                    var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                        .UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
                        .Options;

                    using var dbContext = new ApplicationDbContext(options);

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

                        await context.Response.WriteAsync(errorData.ToString());

                        return;
                    }

                    await context.Response.WriteAsync(@"{""success"":true}");
                });

                endpoints.MapRazorPages();
            });
        }
    }
}
