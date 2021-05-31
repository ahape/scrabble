using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace scrabble.Data
{
    public class GameState
    {
        public string Id { get; set; }
        public string Actions { get; set; }
        public int ActionIndex { get; set; }
        public int Teams { get; set; }
    }

    public class ApplicationDbContext : DbContext
    {
        public DbSet<GameState> Games { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
