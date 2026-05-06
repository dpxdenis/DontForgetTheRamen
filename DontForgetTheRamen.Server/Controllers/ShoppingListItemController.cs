using DontForgetTheRamen.Domain;
using DontForgetTheRamen.Infrastructure;
using DontForgetTheRamen.Server.Hubs;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DontForgetTheRamen.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingListItemController(IHubContext<ShoppingItemHub> shoppingItemHub) : ControllerBase
    {

        private static readonly ILog log = LogManager.GetLogger(typeof(ShoppingListItemController));

        [HttpGet]
        public IEnumerable<ShoppingListItem> Get()
        {
            return MockDataProvider.Instance.Items;
        }

        [HttpPost]
        public async Task<ActionResult> Post(ShoppingListItem shoppingListItem)
        {
            var newItemId = MockDataProvider.Instance.Items[^1].ItemId + 1;
            log.Debug($"Adding new item with id '{newItemId}'");
            shoppingListItem.ItemId = newItemId;

            MockDataProvider.Instance.Items.Add(shoppingListItem);
            log.Debug("Sending new item to all clients...");
            await shoppingItemHub.Clients.All.SendAsync("NewItem", shoppingListItem);
            log.Debug("Sending new item to all clients done!");
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Put(ShoppingListItem shoppingListItem)
        {
            var index = MockDataProvider.Instance.Items.FindIndex(x => x.ItemId == shoppingListItem.ItemId);

            if(index != -1 )
            {
                log.Debug($"Modifying item with id {index}...");
                MockDataProvider.Instance.Items[index] = shoppingListItem;
                log.Debug("Sending change to all clients...");
                await shoppingItemHub.Clients.All.SendAsync("UpdatedItem", shoppingListItem);
                log.Debug("Sending change to all clients done!");
                log.Debug($"Modifying item with id {index} done!");
                return Ok();
            } else
            {
                log.Debug($"Modifying item with id '{shoppingListItem.ItemId}' failed, id not found!");
                return BadRequest();
            }

        }
    }
}
