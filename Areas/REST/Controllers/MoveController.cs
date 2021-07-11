using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ScrabbleMoveApi;

namespace scrabble.REST
{
    [ApiController]
    [Route("rest/move")]
    public class MoveController : ControllerBase
    {
        private readonly ILogger<GameController> logger;

        public MoveController(
            ILogger<GameController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Read(string board, string rack)
        {
            var teams = 2;
            var bag = new char[0];
            var turn = 0;

            Console.WriteLine("Board is -- {0}", board);
            Console.WriteLine("Rack is -- {0}", rack);

            var bestPossibleScore = Api.FindBestWord(
                teams,
                (board ?? "").ToCharArray(),
                bag,
                (rack ?? "").ToCharArray(),
                turn);

            return Ok(new { score = bestPossibleScore });
        }
    }
}
