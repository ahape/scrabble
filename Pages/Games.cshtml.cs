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

        public GamePlayer[] ActiveGames 
        { 
            get
            {
                if (activeGames == null)
                    return new GamePlayer[0];
                return activeGames;
            }
        }

        private GamePlayer[] activeGames;
        private readonly ILogger<GamesModel> logger;
        private readonly ApplicationDbContext dbContext;

        public GamesModel(ILogger<GamesModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        public void OnGet()
        {
            var userName = User.Identity.Name;

            activeGames = dbContext.Players
                .Where(x => x.UserName == userName)
                .OrderByDescending(x => x.Id)
                .ToArray();
        }

        async public void OnPostAsync(int teams)
        {
            var game = new GameState { Teams = teams };

            dbContext.Add(game);
            await dbContext.SaveChangesAsync();
            
            Console.WriteLine($"{User.Identity.Name} created game " + game.Id);

            Response.Redirect("/games/" + game.Id);
        }
    }
}
