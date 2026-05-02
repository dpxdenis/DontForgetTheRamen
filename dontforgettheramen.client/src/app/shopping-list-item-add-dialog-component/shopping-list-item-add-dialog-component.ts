import { Component } from '@angular/core';

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

  showDialog() {
    this.visible = true;
  }
}
