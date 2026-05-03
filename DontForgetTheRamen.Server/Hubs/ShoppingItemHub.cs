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
    }
}
