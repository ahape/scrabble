using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using scrabble.Data;
using scrabble.Hubs;

namespace scrabble.REST
{
    [ApiController]
    [Route("rest/games/{id}")]
    public class GameController : ControllerBase
    {
        private readonly ILogger<GameController> logger;
        private readonly ApplicationDbContext dbContext;
        private readonly IHubContext<ChatHub> hubContext;

        public GameController(
            ILogger<GameController> logger,
            ApplicationDbContext dbContext,
            IHubContext<ChatHub> hubContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
            this.hubContext = hubContext;
        }

        [HttpGet]
        async public Task<ActionResult<GameState>> Read(string id)
        {
            var gameState = await dbContext.Games.FindAsync(id);

            if (gameState == null)
                return NotFound();

            return gameState;
        }

        [HttpPost]
        async public Task<ActionResult<GameState>> Update(Guid id, GameState gameState)
        {
            if (id != gameState.Id)
                return BadRequest();

            dbContext.Entry(gameState).State = EntityState.Modified;

            try 
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            // Notify interested parties of this change.
            await hubContext.Clients.Group(id.ToString()).SendAsync("GameUpdate", gameState);
            
            return gameState;
        }

        [HttpDelete]
        async public Task<IActionResult> Delete(Guid id)
        {
            var gameState = await dbContext.Games.FindAsync(id);

            if (gameState == null)
                return NotFound();

            // TODO: Remove this once EF nav props work
            var playersForGame = dbContext.Players.Where(x => x.GameId == id);

            dbContext.Remove(gameState);

            // TODO: Remove this once EF nav props work
            dbContext.RemoveRange(playersForGame);

            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
