using System;

namespace scrabble.Data
{
    public class GamePlayer : Serializable
    {
        public int Id { get; set; }
        public Guid GameId { get; set; }
        public string UserName { get; set; }
        public int Team { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public GameState Game { get; set; }
    }
}

