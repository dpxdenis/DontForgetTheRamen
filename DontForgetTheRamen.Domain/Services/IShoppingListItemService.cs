using DontForgetTheRamen.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Domain.Services
{
    public interface IShoppingListItemService
    {
        public Task<List<ShoppingListItem>> GetItems();
        public Task AddItem(ShoppingListItem shoppingListItem);
        public Task<bool> EditItem(ShoppingListItem shoppingListItem);
    }
}
