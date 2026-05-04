import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingService } from './shopping-service';
import { MessageService } from 'primeng/api';
import { SignalRService } from './signal-rservice';

export class ShoppingListItem {
  public itemId: number | undefined;
  public articleName: string;
  public createdBy: string | undefined;
  public quantity: number;
  public description: string | undefined;
  public price: number | undefined;
  public placeToBuy: string | undefined;
  public checked: boolean;
  constructor(itemId: number | undefined, articleName: string, createdBy: string | undefined, quantity: number, description: string | undefined, price: number | undefined, placeToBuy: string | undefined, checked: boolean) {
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
  username = "";

  constructor(private shoppingService: ShoppingService, private messageService: MessageService, private signalRService: SignalRService) {

  }

  init() {
    this.shoppingService.getShoppingItems().subscribe({
      next: (items) => {
        this.items.set(items);
        //this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `${items.length} shopping items loaded` });
        if (items.length == 0) {
          this.messageService.add({ severity: 'info', summary: 'DontForgetTheRamen', detail: `There are currently no shopping items, lets create one!` });
        }
      },
      error: (err) => {
        console.error(err);
      }

    });

    this.signalRService.startConnection();
    this.signalRService.onNewItem(item => {
      this.items.update(items => [...items, item]);
      this.messageService.add({ severity: 'info', summary: 'DontForgetTheRamen', detail: `New shopping item '${item.articleName}' was added by @${item.createdBy}` });
    })

    this.signalRService.changeCheckedState((item, username) => {
      this.items.update(currentItems =>
        currentItems.map(currentItem => currentItem.itemId === item.itemId ? { ...currentItem, ...item } : currentItem)
      );
      let msg = item.checked ? 'Closed' : 'Open';
      this.messageService.add({ severity: 'info', summary: 'DontForgetTheRamen', detail: `Shopping item '${item.articleName}' was set to '${msg}' by @${username}` });
    });
  }

  addNewItem(shoppingItem: ShoppingListItem) {
    shoppingItem.itemId = -1;
    shoppingItem.createdBy = this.username;
    this.shoppingService.addNewShoppingItem(shoppingItem).subscribe({
      next: () => {

      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'DontForgetTheRamen', detail: `Failed to create new shopping list item!` });
      }
    });
  }

  handleLogin(username: string, password: string) {
    this.username = username;
    this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `Login successfull! Welcome back, @${this.username}!` });
  }

  sendCheckedState(shoppingListItem: ShoppingListItem) {
    this.signalRService.sendChangeCheckedState(shoppingListItem, this.username);
  }

}
