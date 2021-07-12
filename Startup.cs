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
using Microsoft.Extensions.Logging;

namespace scrabble
{
    public class Startup
    {

        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            Environment = env;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment Environment;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var conn = Configuration.GetConnectionString("ScrabbleDbConnection");

            // Used to override the default provider settings
            var provider = Configuration["DbProvider"];

            // Set default provider if not specified
            if (string.IsNullOrEmpty(provider))
                provider = Environment.IsProduction() ? "SqlServer" : "Sqlite";

            if (!string.IsNullOrEmpty(provider))
            {
                switch (provider)
                {
                    case "SqlServer":
                        services.AddDbContext<ApplicationDbContext, SqlServerApplicationDbContext>(options =>
                        {
                            if (!string.IsNullOrEmpty(conn))
                                options.UseSqlServer(conn);
                        },
                        ServiceLifetime.Transient);
                        break;
                    case "Sqlite":
                        services.AddDbContext<ApplicationDbContext, SqliteApplicationDbContext>(options =>
                        {
                            if (!string.IsNullOrEmpty(conn))
                                options.UseSqlite(conn);
                        },
                        ServiceLifetime.Transient);
                        break;
                }
            }

            services.AddDefaultIdentity<IdentityUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            if (Environment.IsDevelopment())
            {
                services.AddDatabaseDeveloperPageExceptionFilter();

                services.Configure<IdentityOptions>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequiredLength = 1;
                    options.Password.RequiredUniqueChars = 0;
                });
            }

            services.AddRazorPages(options =>
            {
                options.Conventions.AuthorizePage("/Games");
                options.Conventions.AuthorizePage("/Game");
                options.Conventions.AuthorizePage("/ChooseTeam");
                options.Conventions.AddPageRoute("/Games", "/");
                options.Conventions.AddPageRoute("/Games", "/Index");
                options.Conventions.AddPageRoute("/Game", "/Games/{GameId}");
                options.Conventions.AddPageRoute("/ChooseTeam", "/Games/{GameId}/Choice");
            });

            var googleAuthNSection = Configuration.GetSection("Authentication:Google");
            if (googleAuthNSection != null &&
                !string.IsNullOrWhiteSpace(googleAuthNSection["ClientId"]) &&
                !string.IsNullOrWhiteSpace(googleAuthNSection["ClientSecret"]))
            {
                services.AddAuthentication()
                .AddGoogle(options =>
                {
                    options.ClientId = googleAuthNSection["ClientId"];
                    options.ClientSecret = googleAuthNSection["ClientSecret"];
                });
            }

            services.AddSignalR();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app, 
            IWebHostEnvironment env, 
            ILogger<Startup> logger,
            ApplicationDbContext dbContext)
        {
            dbContext?.Database?.Migrate();

            if (env.IsDevelopment())
            {
                app.UseMigrationsEndPoint();
                app.UseDeveloperExceptionPage();
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
                endpoints.MapRazorPages();
                endpoints.MapControllers();
                endpoints.MapHub<ChatHub>("/chatHub");
            });
        }
    }
}
