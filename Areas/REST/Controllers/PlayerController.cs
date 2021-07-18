using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using scrabble.Data;
using scrabble.Hubs;

namespace scrabble.REST
{
    [ApiController]
    [Route("rest/players/{id}")]
    public class PlayerController : ControllerBase
    {
        private readonly ILogger<PlayerController> logger;
        private readonly IHubContext<ChatHub> hubContext;
        private readonly ApplicationDbContext dbContext;

        public PlayerController(
            ILogger<PlayerController> logger,
            IHubContext<ChatHub> hubContext,
            ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
            this.hubContext = hubContext;
        }

        [HttpDelete]
        async public Task<IActionResult> Delete(int id)
        {
            var @record = await dbContext.Players.FindAsync(id);

            if (@record == null)
                return NotFound();

            // Load the associated game.
            dbContext.Entry(@record).Reference(x => x.Game).Load();

            // Load the assoc game's other players, if any.
            dbContext.Entry(@record.Game).Collection(x => x.Players).Load();

            // Remove this player from the game.
            dbContext.Players.Remove(@record);

            if (!@record.Game.Players.Any())
                dbContext.Games.Remove(@record.Game);

            // TODO: Log that player has left game.

            await dbContext.SaveChangesAsync();

            await hubContext.Clients.Group(@record.GameId.ToString()).SendAsync("PlayerRemove", @record);

            return Ok();
        }
    }
}
