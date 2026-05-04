import { Component } from '@angular/core';
import { ShoppingService } from '../services/shopping-service';
import { MessageService } from 'primeng/api';
import { ShoppingListItem, StateService } from '../services/state-service';

@Component({
  selector: 'app-shopping-list-item-dialog-component',
  standalone: false,
  templateUrl: './shopping-list-item-dialog-component.html',
  styleUrl: './shopping-list-item-dialog-component.scss',
})
export class ShoppingListItemDialogComponent {
  visible: boolean = false;

  article: ShoppingListItem = new ShoppingListItem(-1, "", "", 1, "", 0.00, "", false);

  constructor(private stateService: StateService) {

  }

  showDialog() {
    this.visible = true;
  }

  save() {
    this.stateService.addNewItem(this.article);
    this.visible = false
    this.reset();
  }

  reset() {
    if (this.article.itemId === -1) {
      this.article.articleName = "";
      this.article.quantity = 1;
      this.article.description = "";
      this.article.price = 0.0;
      this.article.placeToBuy = "";
    }
  }

  cancel() {
    this.visible = false
    this.reset();
  }
}
