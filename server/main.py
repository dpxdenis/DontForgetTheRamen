from flask import Flask, jsonify

from server.models.shoppinglist_item import ShoppingListItem

app = Flask(__name__)

sample_shopping_list = [
    ShoppingListItem(item_id=0, article_name="Milk"),
    ShoppingListItem(item_id=1, article_name="Worscht", description="That good Worscht"),
    ShoppingListItem(item_id=2, article_name="Cheese", description="That good Cheese", price=4.99),
    ShoppingListItem(item_id=3, article_name="Bread", description="Yea its bread", price=5.99,
                     place_to_buy="LocalStore"),
    ShoppingListItem(item_id=4, article_name="Pizza Salami", description="Special offer", price=2.99,
                     place_to_buy="LocalStore", checked=True)
]


@app.route('/api/data')
def get_data():
    return jsonify([item.serialize() for item in sample_shopping_list])

if __name__ == '__main__':
    app.run()
