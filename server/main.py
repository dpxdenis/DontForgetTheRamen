import os

from flask import Flask, jsonify, send_from_directory

from server.models.shoppinglist_item import ShoppingListItem

app = Flask(__name__)

sample_shopping_list = [
    ShoppingListItem(item_id=0, article_name="Milk"),
    ShoppingListItem(item_id=1, article_name="Ice cream", quantity=999),
    ShoppingListItem(item_id=2, article_name="Worscht", quantity=2, description="That good Worscht"),
    ShoppingListItem(item_id=3, article_name="Cheese", quantity=5, description="That good Cheese", price=4.99),
    ShoppingListItem(item_id=4, article_name="Bread", quantity=5, description="Yea its bread", price=5.99,
                     place_to_buy="LocalStore"),
    ShoppingListItem(item_id=5, article_name="Pizza Salami", quantity=5, description="Special offer", price=2.99,
                     place_to_buy="LocalStore", checked=True)
]


@app.route('/api/data')
def get_data():
    return jsonify([item.serialize() for item in sample_shopping_list])


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.root_path,
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run()
