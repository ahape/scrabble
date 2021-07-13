using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ScrabbleMoveGenerator;

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

            var best = MoveGenerator.FindBestMove(
                (board ?? "").ToCharArray(),
                (rack ?? "").ToCharArray());

            return Ok(new 
            { 
                score = best.TotalScore, 
                text = $"With the letters: {rack}\n" + best.ToString(),
            });
        }

        [HttpGet("validate")]
        public IActionResult Validate(string words)
        {
            var results = new Dictionary<string, bool>();
            /*
            foreach (var word in words.Split(','))
                results.Add(word, MoveGenerator.IsWordReal(word));

            return Ok(new { answer = results });
            */
            return Ok(new { answer = results });
        }
    }
}
