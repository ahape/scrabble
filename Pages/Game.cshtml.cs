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
        
        public int Team { get; set; }

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
                Response.Redirect("/games");
                return;
            }

            var userName = User.Identity.Name;
            // TODO Need to also make sure GAME exists
            var entry = await dbContext.Players.FirstOrDefaultAsync(p => p.GameId == GameId && p.UserName == userName);
            if (entry == null)
            {
                Response.Redirect($"/game/{GameId}/choice");
                return;
            } 

            Team = entry.Team;
        }
    }
}
