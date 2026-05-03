using System;
using System.Collections.Generic;
using System.Text;

namespace DontForgetTheRamen.Domain
{
    public class ShoppingListTempItem
    {
        public required string ArticleName { get; set; }
        public required string CreatedBy { get; set; }
        public required int Quantity { get; set; }
        public string? Description { get; set; }
        public double? Price { get; set; }
        public string? PlaceToBuy { get; set; }
    }
}
