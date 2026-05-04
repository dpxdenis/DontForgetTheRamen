using DontForgetTheRamen.Domain;
using DontForgetTheRamen.Infrastructure;
using DontForgetTheRamen.Server.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DontForgetTheRamen.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListItemController(IHubContext<ShoppingItemHub> shoppingItemHub) : ControllerBase
    {
        [HttpGet]
        public IEnumerable<ShoppingListItem> Get()
        {
            return MockDataProvider.Instance.Items;
        }

        [HttpPost]
        public async Task<ActionResult> Post(ShoppingListItem shoppingListItem)
        {
            var newItemId = MockDataProvider.Instance.Items[^1].ItemId + 1;

            shoppingListItem.ItemId = newItemId;

            MockDataProvider.Instance.Items.Add(shoppingListItem);

            await shoppingItemHub.Clients.All.SendAsync("NewItem", shoppingListItem);

            return Ok();
        }
    }
}
