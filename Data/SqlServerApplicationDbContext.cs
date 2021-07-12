using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using Microsoft.Extensions.Configuration;

namespace scrabble.Data
{
    public class SqlServerApplicationDbContext : ApplicationDbContext
    {
        public SqlServerApplicationDbContext(DbContextOptions<SqlServerApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
                options.UseSqlServer("DataSource=");
        }
    }
}
