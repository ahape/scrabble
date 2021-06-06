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
        private string gameId;

        public int Teams { get; set; }

        public ChooseTeamModel(ILogger<ChooseTeamModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public void OnGetAsync(string id)
        {
            this.gameId = id;

            var game = await dbContext.Games.FirstOrDefaultAsync(g => g.Id == id);
            if (game == null)
                throw new Exception("Game doens't exist");

            Teams = game.Teams;
        }

        public void OnPost(int team)
        {
            // TODO Need to make sure that someone can't nav to this
            // page and submit another participation entry
            dbContext.Add(new GamePlayer()
            {
                UserName = User.Identity.Name,
                GameId = gameId,
                Team = team,
            });
            dbContext.SaveChanges();

            Response.Redirect("/game/" + gameId);
        }
    }
}

