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
            var game = await dbContext.Games.FirstOrDefaultAsync(g => g.Id == GameId);
            if (game == null)
                throw new Exception("Game doesn't exist");

            var defser = Utils.DefaultSerializer;

            activePlayers = JArray.FromObject(dbContext.Players
                .Where(x => x.GameId == GameId)
                .Select(x => JObject.FromObject(x, defser)), defser);
            Teams = game.Teams;
        }

        public void OnPost(int team)
        {
            Console.WriteLine($"{User.Identity.Name} chose team {team} for game {GameId}");

            // TODO Need to make sure that someone can't nav to this
            // page and submit another participation entry
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

