using DontForgetTheRamen.Domain.Models;
using DontForgetTheRamen.Domain.Services;
using DontForgetTheRamen.Infrastructure;
using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DontForgetTheRamen.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListItemController(IShoppingListItemService shoppingListItemService) : ControllerBase
    {

        private static readonly ILog log = LogManager.GetLogger(typeof(ShoppingListItemController));

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<ShoppingListItem>> Get()
        {
            return await shoppingListItemService.GetItems();
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Post(ShoppingListItem shoppingListItem)
        {
            await shoppingListItemService.AddItem(shoppingListItem);
            return Ok();
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult> Put(ShoppingListItem shoppingListItem)
        {

            var result = await shoppingListItemService.EditItem(shoppingListItem);
            if (!result) return BadRequest();
            return Ok();
        }
    }
}
