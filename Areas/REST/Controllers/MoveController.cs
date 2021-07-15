using System;
using System.Text;
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

        private static IWordDatabase defaultWordList = new NaspaWordList();

        public MoveController(
            ILogger<GameController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Read(string board, string rack)
        {
            var best = MoveGenerator.FindBestMove(
                (board ?? "").ToCharArray(),
                (rack ?? "").ToCharArray(),
                defaultWordList);

            if (best == null || !best.Words.Any() || !best.Placements.Any())
                return Ok(new { score = 0, text = "" });

            return Ok(new 
            { 
                score = best.TotalScore, 
                command = CreatePlayCommand(best),
                text = BestMoveToString(best, rack),
            });
        }

        [HttpGet("validate")]
        public IActionResult Validate(string words)
        {
            var results = new Dictionary<string, bool>();
            foreach (var word in words.Split(','))
                results.Add(word, defaultWordList.Contains(word));

            return Ok(new { answer = results });
        }

        private string CreatePlayCommand(PotentialMove move)
        {
            var word = move.Words.First();
            var placement = move.Placements.First();
            // E.g. "ZEBRA H8 V"
            return word.Word + " " + 
                PotentialMove.SquareToCoords(placement.Square) + " " +
                word.Direction.ToString().Substring(0, 1); // H or V
        }

        private string BestMoveToString(PotentialMove move, string letters)
        {
            var sb = new StringBuilder();
            var i = 0;
            foreach (var word in move.Words)
                sb.AppendLine(++i + ". " + word.Word + " for " + word.Score + " points");
            if (move.Bonus) sb.AppendLine("And 50 bonus points");
            return $@"Could have gotten {move.TotalScore} total points with the letters {letters}.
Breakdown:
{sb}";
        }
    }
}
