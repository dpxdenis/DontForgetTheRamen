namespace DontForgetTheRamen.Domain.Models
{
    public class ShoppingListItem
    {
        public int Id { get; set; }
        public required string ArticleName { get; set; }
        public required string CreatedBy { get; set; }
        public required int Quantity { get; set; }
        public string? Description { get; set; }
        public double? Price { get; set; }
        public string? PlaceToBuy { get; set; }
        public bool Checked { get; set; }
    }
}
