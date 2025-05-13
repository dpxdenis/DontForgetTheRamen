class ShoppingListItem:
    def __init__(self, item_id:int, article_name:str, description:str = "", price:float = 0, place_to_buy:str = "", checked:bool = False):
        self.item_id = item_id
        self.article_name = article_name
        self.description = description
        self.price = price
        self.place_to_buy = place_to_buy
        self.checked = checked

    def serialize(self) -> dict:
        return {
            "item_id": self.item_id,
            "article_name": self.article_name,
            "description": self.description,
            "price": self.price,
            "place_to_buy": self.place_to_buy,
            "checked": self.checked
        }