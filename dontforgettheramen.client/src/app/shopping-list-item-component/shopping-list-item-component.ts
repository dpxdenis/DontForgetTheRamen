import { Component, Input, ViewChild } from '@angular/core';
import { ShoppingListItem, StateService } from '../services/state-service';
import { ShoppingListItemDialogComponent } from '../shopping-list-item-dialog-component/shopping-list-item-dialog-component';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-shopping-list-item',
  standalone: false,
  templateUrl: './shopping-list-item-component.html',
  styleUrl: './shopping-list-item-component.scss',
})
export class ShoppingListItemComponent {
  @Input() skelleton: boolean = false;
  @Input() item: ShoppingListItem = new ShoppingListItem("Potato", 1, false, -1, "admin", "they should be on sale", 0.99, "DontForgetTheRamenMarket");
  @ViewChild('dialog') dialog!: ShoppingListItemDialogComponent;

  constructor(private stateService: StateService) {

  }

  getTitle(): string {
    return `${this.item.quantity}x ${this.item.articleName}`;
  }

  onCheckedChange(event: any) {
    //this.stateService.sendCheckedState(this.item);
    this.stateService.updateItem(this.item);
  }

  openModifyDialog() {
    if(!this.skelleton) this.dialog.showDialog();
  }
}
