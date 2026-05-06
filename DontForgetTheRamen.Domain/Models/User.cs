using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Domain.Models
{
    public class User
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}
