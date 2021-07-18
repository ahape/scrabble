using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using scrabble.Data;
using scrabble.Hubs;

namespace scrabble.REST
{
    [ApiController]
    [Route("rest/players")]
    public class PlayersController : ControllerBase
    {
        private readonly ILogger<PlayersController> logger;
        private readonly IHubContext<ChatHub> hubContext;
        private readonly ApplicationDbContext dbContext;

        public PlayersController(
            ILogger<PlayersController> logger, 
            IHubContext<ChatHub> hubContext, 
            ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.hubContext = hubContext;
            this.dbContext = dbContext;
        }

        [HttpPost]
        async public Task<IActionResult> Add(GamePlayer player)
        {
            dbContext.Players.Add(player);

            await dbContext.SaveChangesAsync();

            await hubContext.Clients.Group(player.GameId.ToString()).SendAsync("PlayerAdd", player);

            return Ok(player);
        }
    }
}
