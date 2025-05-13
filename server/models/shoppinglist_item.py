class ShoppingListItem:
    def __init__(self, item_id: int, article_name: str, quantity: int = 1, description: str = "",
                 price: float = 0, place_to_buy: str = "", checked: bool = False):
        self.item_id = item_id
        self.article_name = article_name
        self.quantity = quantity
        self.description = description
        self.price = price
        self.place_to_buy = place_to_buy
        self.checked = checked

    def serialize(self) -> dict:
        return {
            "itemId": self.item_id,
            "articleName": self.article_name,
            "quantity": self.quantity,
            "description": self.description,
            "price": self.price,
            "placeToBuy": self.place_to_buy,
            "checked": self.checked
        }
