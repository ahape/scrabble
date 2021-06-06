using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using scrabble.Data;

namespace scrabble.Pages
{
    public class GameModel : PageModel
    {
        private readonly ILogger<GameModel> logger;
        private readonly ApplicationDbContext dbContext;

        public GameModel(ILogger<GameModel> logger, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        async public void OnGetAsync(string id)
        {
            var userName = User.Identity.Name;
            // TODO Need to also make sure GAME exists
            var entry = await dbContext.Players.FirstOrDefaultAsync(p => p.GameId == id && p.UserName == userName);
            if (entry == null)
            {
                dbContext.Add(new GamePlayer()
                {
                    UserName = userName,
                    GameId = id,
                    Team = 1,
                });
                dbContext.SaveChanges();
            } 
            else 
            {
                Console.WriteLine("Already participating");
            }
        }
    }
}
