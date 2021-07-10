using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace scrabble.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<GameState> Games { get; set; }
        public DbSet<GamePlayer> Players { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<GameState>()
                .Property(x => x.Version)
                    .HasDefaultValue(0)
                    .IsRowVersion();
        }
    }
}
