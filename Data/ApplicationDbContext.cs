using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json.Linq;

namespace scrabble.Data
{
    public class GameState
    {
        public string Id { get; set; }
        public string Actions { get; set; }
        public int ActionIndex { get; set; }
        public int Teams { get; set; }
        //[Timestamp]
        public long Timestamp { get; set; }

        public GameState() 
        { 
        }

        public GameState(int teams)
        {
            Id = Guid.NewGuid().ToString();
            Teams = teams;
            Actions = string.Join(",", new[] { "NEW_GAME" });
            Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        }

        public JObject ToJson()
        {
            var json = new JObject();
            json["id"] = this.Id;
            json["teams"] = this.Teams;
            json["actionIndex"] = this.ActionIndex;
            json["actions"] = JArray.FromObject(this.Actions.Split(','));
            json["_timestamp"] = this.Timestamp;
            return json;
        }
    }

    public class GamePlayer
    {
        public int Id { get; set; }
        public string GameId { get; set; }
        public string UserName { get; set; }
        public int Team { get; set; }

        public JObject ToJson()
        {
            var json = new JObject();
            json["id"] = this.Id;
            json["team"] = this.Team;
            json["gameId"] = this.GameId;
            json["userName"] = this.UserName;
            return json;
        }
    }

    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<GameState> Games { get; set; }
        public DbSet<GamePlayer> Players { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
