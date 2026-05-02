import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingService } from './shopping-service';

export class ShoppingListItem {
  public itemId: number;
  public articleName: string;
  public createdBy: string;
  public quantity: number;
  public description: string;
  public price: number;
  public placeToBuy: string;
  public checked: boolean;
  constructor(itemId: number, articleName: string, createdBy: string, quantity: number, description: string, price: number, placeToBuy: string, checked: boolean) {
    this.itemId = itemId;
    this.articleName = articleName;
    this.createdBy = createdBy;
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.placeToBuy = placeToBuy;
    this.checked = checked;
  }

}

@Injectable({
  providedIn: 'root',
})
export class StateService {

  items = signal<ShoppingListItem[]>([]);

  constructor(private shoppingService: ShoppingService) {

  }

  init() {
    this.shoppingService.getShoppingItems().subscribe({
      next: (items) => {
        this.items.set(items);
      },
      error: (err) => {
        console.error(err);
      }

    });
  }

}
