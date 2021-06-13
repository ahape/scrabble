using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using scrabble.Data;

namespace scrabble.Pages
{
    public class GameModel : PageModel
    {
        private readonly ILogger<GameModel> logger;
        private readonly ApplicationDbContext dbContext;
        
        public int Team { get; set; }
        public long Timestamp { get; set; }
        public JObject GameJson { get; set; }
        public JArray Players { get; set; }
        public string UserName { get; set; }

        [BindProperty(SupportsGet=true)]
        public string GameId { get; set; }

        public GameModel(ILogger<GameModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public void OnGetAsync()
        {
            if (string.IsNullOrEmpty(GameId))
            {
                logger.LogWarning("GameId did not populate", null);
                Response.Redirect("/games");
                return;
            }

            UserName = User.Identity.Name;
            // TODO Need to also make sure GAME exists
            var entry = await dbContext.Players.FirstOrDefaultAsync(p => 
                p.GameId == GameId && p.UserName == UserName);
            if (entry == null)
            {
                Response.Redirect($"/games/{GameId}/choice");
                return;
            } 

            var game = await dbContext.Games.FirstOrDefaultAsync(g => g.Id == GameId);
            if (game == null)
            {
                logger.LogWarning($"Couldn't find game for ID of {GameId}", null);
                Response.Redirect("/games");
                return;
            }

            Console.WriteLine($"{User.Identity.Name} loaded game " + game.Id);

            Team = entry.Team;
            Timestamp = game.Timestamp;
            GameJson = game.ToJson();
            Players = JArray.FromObject(dbContext.Players
                .Where(x => x.GameId == GameId)
                .Select(x => x.ToJson()));
        }
    }
}
