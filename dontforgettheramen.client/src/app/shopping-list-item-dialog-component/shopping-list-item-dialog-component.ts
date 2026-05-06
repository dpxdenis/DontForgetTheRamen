import { Component, Input } from '@angular/core';
import { ShoppingListItem, StateService } from '../services/state-service';

@Component({
  selector: 'app-shopping-list-item-dialog-component',
  standalone: false,
  templateUrl: './shopping-list-item-dialog-component.html',
  styleUrl: './shopping-list-item-dialog-component.scss',
})
export class ShoppingListItemDialogComponent {
  visible: boolean = false;

  @Input() article: ShoppingListItem = new ShoppingListItem(-1, "", "", 1, "", 0.00, "", false);

  constructor(private stateService: StateService) {

  }

  isNewItem(): boolean {
    return this.article.itemId === -1;
  }

  showDialog() {
    this.visible = true;
  }

  save() {
    if (this.isNewItem()) {
      this.stateService.addNewItem(this.article);
    } else {
      this.stateService.updateItem(this.article);
    }
    this.visible = false
    this.reset();
  }

  reset() {
    if (this.isNewItem()) {
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
