using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace scrabble.Data
{
    public class GameState
    {
        public Guid Id { get; set; }
        public string Actions { get; set; } = "NEW_GAME";
        public int ActionIndex { get; set; }
        public int Teams { get; set; }
        public long Version { get; set; }

        [JsonIgnore]
        public ICollection<GamePlayer> Players { get; set; }
    }
}
