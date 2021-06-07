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

        public int Teams { get; set; }

        [BindProperty(SupportsGet=true)]
        public string GameId { get; set; }

        public ChooseTeamModel(ILogger<ChooseTeamModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public void OnGetAsync()
        {
            Console.WriteLine("GET: GameId=" + GameId);

            var game = await dbContext.Games.FirstOrDefaultAsync(g => g.Id == GameId);
            if (game == null)
                throw new Exception("Game doens't exist");

            Teams = game.Teams;
        }

        public void OnPost(int team)
        {
            Console.WriteLine("POST: GameId=" + GameId);

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

