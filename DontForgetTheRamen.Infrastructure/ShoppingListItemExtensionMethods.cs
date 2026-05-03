using DontForgetTheRamen.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Infrastructure
{
    public static class ShoppingListItemExtensionMethods
    {
        public static ShoppingListItem ToShoppingListItem(this ShoppingListTempItem tempItem, long itemId)
        {
            return new ShoppingListItem()
            {
                ItemId = itemId,
                Quantity = tempItem.Quantity,
                ArticleName = tempItem.ArticleName,
                CreatedBy = tempItem.CreatedBy,
                Description = tempItem.Description,
                PlaceToBuy = tempItem.PlaceToBuy,
                Price = tempItem.Price,
            };
        }
    }
}
