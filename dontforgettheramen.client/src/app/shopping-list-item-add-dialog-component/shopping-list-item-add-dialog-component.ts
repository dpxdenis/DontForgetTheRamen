import { Component } from '@angular/core';
import { ShoppingService } from '../services/shopping-service';
import { MessageService } from 'primeng/api';
import { ShoppingListItem, ShoppingListTempItem, StateService } from '../services/state-service';

@Component({
  selector: 'app-shopping-list-item-add-dialog-component',
  standalone: false,
  templateUrl: './shopping-list-item-add-dialog-component.html',
  styleUrl: './shopping-list-item-add-dialog-component.scss',
})
export class ShoppingListItemAddDialogComponent {
  visible: boolean = false;

  articleName: string = "";
  quantity: number = 1;
  description: string = "";
  price: number = 0.0;
  placeToBuy: string = "";

  constructor(private stateService: StateService) {

  }

  showDialog() {
    this.visible = true;
  }

  save() {
    this.stateService.addNewItem(this.articleName, this.quantity, this.description, this.price, this.placeToBuy);
    this.visible = false
    this.reset();
  }

  reset() {
    this.articleName = "";
    this.quantity = 1;
    this.description = "";
    this.price = 0.0;
    this.placeToBuy = "";
  }

  cancel() {
    this.visible = false
    this.reset();
  }
}
