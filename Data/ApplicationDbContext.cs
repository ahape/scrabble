using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace scrabble.Data
{
    public class GameState
    {
        public string Id { get; set; }
        public string Actions { get; set; }
        public int ActionIndex { get; set; }
        public int Teams { get; set; }

        public GameState() 
        { 
            Id = Guid.NewGuid().ToString();
        }

        public GameState(int teams) : base()
        {
            Teams = teams;
            Actions = string.Join(",", new[] { "NEW GAME" });
        }
    }

    public class GamePlayer
    {
        public int Id { get; set; }
        public string GameId { get; set; }
        public string UserName { get; set; }
        public int Team { get; set; }
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
