using System;
using Newtonsoft.Json;

namespace scrabble.Data
{
    public class GamePlayer
    {
        public int Id { get; set; }
        public Guid GameId { get; set; }
        public string UserName { get; set; }
        public int Team { get; set; }

        [JsonIgnore]
        public GameState Game { get; set; }
    }
}

