using DontForgetTheRamen.Domain.Models;
using DontForgetTheRamen.Domain.Services;
using DontForgetTheRamen.Infrastructure.Hubs;
using log4net;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Infrastructure.Services
{
    public class ShoppingListItemService(AppDbContext appDbContext, IHubContext<ShoppingItemHub> shoppingItemHub) : IShoppingListItemService
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(ShoppingListItemService));
        public async Task AddItem(ShoppingListItem shoppingListItem)
        {
            log.Debug("Adding new item...");
            appDbContext.ShoppingListItems.Add(shoppingListItem);
            await appDbContext.SaveChangesAsync();

            log.Debug("Sending new item to all clients...");
            await shoppingItemHub.Clients.All.SendAsync("NewItem", shoppingListItem);
            log.Debug("Sending new item to all clients done!");

            log.Debug("Adding new item done!");
        }

        public async Task<bool> EditItem(ShoppingListItem shoppingListItem)
        {
            log.Debug($"Modifying item with id {shoppingListItem.Id}...");
            var exisitingItem = await appDbContext.ShoppingListItems.FirstOrDefaultAsync(x => x.Id == shoppingListItem.Id);

            if (exisitingItem is null)
            {
                log.Debug($"Modifying item with id '{shoppingListItem.Id}' failed, id not found!");
                return false;
            }

            appDbContext.Entry(exisitingItem).CurrentValues.SetValues(shoppingListItem);
            await appDbContext.SaveChangesAsync();

            log.Debug("Sending change to all clients...");
            await shoppingItemHub.Clients.All.SendAsync("UpdatedItem", shoppingListItem);
            log.Debug("Sending change to all clients done!");
            log.Debug($"Modifying item with id {exisitingItem.Id} done!");

            return true;
        }

        public async Task<List<ShoppingListItem>> GetItems()
        {
            return await appDbContext.ShoppingListItems.ToListAsync();
        }
    }
}
