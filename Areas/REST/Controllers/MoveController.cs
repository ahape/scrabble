using System;
using System.Linq;
using System.Collections.Generic;
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

            var best = Api.FindBestWord(
                teams,
                (board ?? "").ToCharArray(),
                bag,
                (rack ?? "").ToCharArray(),
                turn);

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
            foreach (var word in words.Split(','))
                results.Add(word, Api.IsWordReal(word));

            return Ok(new { answer = results });
        }
    }
}
