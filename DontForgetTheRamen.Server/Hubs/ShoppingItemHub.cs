using DontForgetTheRamen.Domain;
using Microsoft.AspNetCore.SignalR;

namespace DontForgetTheRamen.Server.Hubs
{
    public class ShoppingItemHub : Hub
    {
        public async Task SendNewItem(ShoppingListItem shoppingItem)
        {
            await Clients.All.SendAsync("NewItem", shoppingItem);
        }

        public async Task SendCheckedUpdate(ShoppingListItem shoppingListItem, string username)
        {
            await Clients.Others.SendAsync("ChangedCheckedItem", shoppingListItem, username);
        }

        public async Task SendUpdatedItem(ShoppingListItem shoppingListItem)
        {
            await Clients.All.SendAsync("UpdatedItem", shoppingListItem);
        }
    }
}
