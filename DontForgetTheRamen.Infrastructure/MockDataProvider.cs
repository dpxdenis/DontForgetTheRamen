using DontForgetTheRamen.Domain;

namespace DontForgetTheRamen.Infrastructure
{
    public class MockDataProvider
    {
        public static MockDataProvider Instance => new MockDataProvider();
        public List<ShoppingListItem> Items { get; set; } = new List<ShoppingListItem>();
        private MockDataProvider()
        {
            //Open mock data
            Items.Add(new ShoppingListItem()
            {
                ItemId = 0,
                ArticleName = "Banana",
                Quantity = 1,
                CreatedBy = "mock",
                Description = "Please fresh",
                PlaceToBuy = "Everywhere",
                Price = 0.99,
            });

            Items.Add(new ShoppingListItem()
            {
                ItemId = 1,
                ArticleName = "Apple",
                Quantity = 2,
                CreatedBy = "mock",
                Description = "Please fresh",
                PlaceToBuy = "Everywhere",
            });

            Items.Add(new ShoppingListItem()
            {
                ItemId = 2,
                ArticleName = "Potato",
                Quantity = 1,
                CreatedBy = "mock",
                Description = "Please fresh",
            });

            Items.Add(new ShoppingListItem()
            {
                ItemId = 3,
                ArticleName = "Other Potato",
                Quantity = 1,
                CreatedBy = "mock",
            });

            //closed mock data
            Items.Add(new ShoppingListItem()
            {
                ItemId = 4,
                ArticleName = "Pizza",
                Quantity = 1,
                CreatedBy = "mock",
                Description = "Choose something",
                PlaceToBuy = "Market",
                Price = 0.99,
                Checked = true
            });

            Items.Add(new ShoppingListItem()
            {
                ItemId = 5,
                ArticleName = "Chicken Wings",
                Quantity = 2,
                CreatedBy = "mock",
                Checked = true
            });
        }
    }
}
