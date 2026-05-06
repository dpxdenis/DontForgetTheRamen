using DontForgetTheRamen.Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Infrastructure
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<ShoppingListItem> ShoppingListItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite($"Data Source=app.db");
    }
}
