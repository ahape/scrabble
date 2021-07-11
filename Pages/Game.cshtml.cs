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
        public byte[] Version { get; set; }
        public JObject GameJson { get; set; }
        public JArray Players { get; set; }

        [BindProperty(SupportsGet=true)]
        public Guid GameId { get; set; }

        public GameModel(ILogger<GameModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public Task OnGetAsync()
        {
            if (GameId == Guid.Empty)
            {
                logger.LogWarning("GameId did not populate", null);
                Response.Redirect("/games");
                return;
            }

            var userName = User.Identity.Name;
            // TODO Need to also make sure GAME exists
            var entry = await dbContext.Players.FirstOrDefaultAsync(p => 
                p.GameId == GameId && p.UserName == userName);
            if (entry == null)
            {
                Response.Redirect($"/games/{GameId}/choice");
                return;
            } 

            var game = await dbContext.Games.FindAsync(GameId);
            if (game == null)
            {
                logger.LogWarning($"Couldn't find game for ID of {GameId}", null);
                Response.Redirect("/games");
                return;
            }

            Console.WriteLine($"{User.Identity.Name} loaded game " + game.Id);

            Team = entry.Team;
            Version = game.Version;
            GameJson = game.ToJson();
            var players = new JObject[game.Teams];

            dbContext.Entry(game).Collection(x => x.Players).Load();

            foreach (var player in game.Players)
            {
                // Have to account for how array might be sparse.
                players[player.Team - 1] = player.ToJson();
            }

            Players = JArray.FromObject(players);
        }
    }
}
