using DontForgetTheRamen.Domain.Models;
using log4net;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DontForgetTheRamen.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(UserManager<IdentityUser> userManager, IConfiguration config) : ControllerBase
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(AuthController));

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var identityUser = new IdentityUser() { UserName = user.Username };

            var result = await userManager.CreateAsync(identityUser, user.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            var identityUser = await userManager.FindByNameAsync(user.Username);

            if (identityUser is null || !await userManager.CheckPasswordAsync(identityUser, user.Password)) return Unauthorized();

            var token = GenerateJwt(identityUser);

            return Ok(new { token });
        }

        private string GenerateJwt(IdentityUser user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(config["JwtKey"]!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
