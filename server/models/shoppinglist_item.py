class ShoppingListItem:
    def __init__(self, item_id: int, article_name: str, created_by: str, quantity: int = 1, description: str = "",
                 price: float = 0, place_to_buy: str = "", checked: bool = False):
        self.item_id = item_id
        self.article_name = article_name
        self.created_by = created_by
        self.quantity = quantity
        self.description = description
        self.price = price
        self.place_to_buy = place_to_buy
        self.checked = checked

    def serialize(self) -> dict:
        return {
            "itemId": self.item_id,
            "articleName": self.article_name,
            "createdBy": self.created_by,
            "quantity": self.quantity,
            "description": self.description,
            "price": self.price,
            "placeToBuy": self.place_to_buy,
            "checked": self.checked
        }
