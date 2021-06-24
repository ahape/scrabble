using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using scrabble.Data;

namespace scrabble.REST
{
    [ApiController]
    [Route("rest/players/{id}")]
    public class PlayerController : ControllerBase
    {
        private readonly ILogger<GameController> logger;
        private readonly ApplicationDbContext dbContext;

        public PlayerController(
            ILogger<GameController> logger,
            ApplicationDbContext dbContext)
        {
            this.logger = logger;
            this.dbContext = dbContext;
        }

        [HttpDelete]
        async public Task<IActionResult> Delete(int id)
        {
            var @record = await dbContext.Players.FindAsync(id);

            if (@record == null)
                return NotFound();

            dbContext.Players.Remove(@record);

            await RemoveGameIfNoMorePlayers(@record.GameId);

            await dbContext.SaveChangesAsync();

            return Ok();
        }

        // Don't save changes here
        async private Task RemoveGameIfNoMorePlayers(string gameId)
        {
            // TODO: Remove this once EF nav props work
            var playersLeft = dbContext.Players.Where(x => x.GameId == gameId);

            if (!playersLeft.Any())
            {
                var game = await dbContext.Games.FindAsync(gameId);

                dbContext.Games.Remove(game);
            }
        }
    }
}

