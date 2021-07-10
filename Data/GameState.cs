using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace scrabble.Data
{
    public class GameState : Serializable
    {
        public Guid Id { get; set; }
        public string Actions { get; set; } = "NEW_GAME";
        public int ActionIndex { get; set; }
        public int Teams { get; set; }
        public long Version { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public ICollection<GamePlayer> Players { get; set; }
    }
}
