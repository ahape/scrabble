using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using scrabble.Data;

namespace scrabble.Pages
{
    public class ChooseTeamModel : PageModel
    {
        private readonly ILogger<ChooseTeamModel> logger;
        private readonly ApplicationDbContext dbContext;
        private JArray activePlayers;

        public int Teams { get; set; }
        public JArray ActivePlayers
        {
            get
            {
                if (activePlayers == null)
                    return new JArray();
                return activePlayers;
            }
        }

        [BindProperty(SupportsGet=true)]
        public Guid GameId { get; set; }

        public ChooseTeamModel(ILogger<ChooseTeamModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public void OnGetAsync()
        {
            var game = await dbContext.Games.FindAsync(GameId);
            if (game == null)
            {
                Response.Redirect("/games");
                return;
            }

            dbContext.Entry(game).Collection(x => x.Players).Load();

            var user = User.Identity.Name;
            if (game.Players.Any(x => x.UserName == user))
            {
                Response.Redirect("/games/" + GameId);
                return;
            }

            activePlayers = JArray.FromObject(game.Players
                .Select(x => x.ToJson()));
            Teams = game.Teams;
        }

        public void OnPost(int team)
        {
            Console.WriteLine($"{User.Identity.Name} chose team {team} for game {GameId}");

            dbContext.Add(new GamePlayer()
            {
                UserName = User.Identity.Name,
                GameId = GameId,
                Team = team,
            });
            dbContext.SaveChanges();

            Response.Redirect("/games/" + GameId);
        }
    }
}

