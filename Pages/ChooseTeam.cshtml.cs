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
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json.Linq;
using scrabble.Data;
using scrabble.Hubs;

namespace scrabble.Pages
{
    public class ChooseTeamModel : PageModel
    {
        private readonly ILogger<ChooseTeamModel> logger;
        private readonly IHubContext<ChatHub> hubContext;
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

        public ChooseTeamModel(ILogger<ChooseTeamModel> logger, IHubContext<ChatHub> hubContext, ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
            this.hubContext = hubContext;
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

        async public void OnPostAsync(int team)
        {
            Console.WriteLine($"{User.Identity.Name} chose team {team} for game {GameId}");

            var player = new GamePlayer()
            {
                UserName = User.Identity.Name,
                GameId = GameId,
                Team = team,
            };

            dbContext.Add(player);
            await dbContext.SaveChangesAsync();

            await hubContext.Clients.Group(GameId.ToString()).SendAsync("PlayerAdd", player);

            Response.Redirect("/games/" + GameId);
        }
    }
}

