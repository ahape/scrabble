using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore;
using scrabble.Data;

namespace scrabble.Pages
{
    public class GamesModel : PageModel
    {
        private readonly ILogger<GamesModel> logger;
        private readonly ApplicationDbContext dbContext;

        public GamesModel(ILogger<GamesModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        public void OnGet()
        {
        }

        async public void OnPostAsync(int teams)
        {
            var game = new GameState(teams);

            dbContext.Add(game);
            await dbContext.SaveChangesAsync();
            Response.Redirect("/game/" + game.Id);
            /*
            using var httpClient = new HttpClient();
            var result = await httpClient.PostAsync(
                $"{Request.Scheme}://{Request.Host}/rest/games",
                new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("teams", teams.ToString()),
                }));
            var responseData = JObject.Parse(await result.Content.ReadAsStringAsync());
            var gameId = responseData["id"];
            */
        }
    }
}
