import { Component, Input } from '@angular/core';
import { ShoppingListItem, StateService } from '../services/state-service';

@Component({
  selector: 'app-shopping-list-item',
  standalone: false,
  templateUrl: './shopping-list-item-component.html',
  styleUrl: './shopping-list-item-component.scss',
})
export class ShoppingListItemComponent {
  @Input() skelleton: boolean = false;
  @Input() item: ShoppingListItem = new ShoppingListItem(0, "Demo Article", "admin", 1, "yes a article", 7.77, "Kaufland", false);

  constructor(private stateService: StateService) {

  }

  getTitle(): string {
    return `${this.item.quantity}x ${this.item.articleName}`;
  }

  onCheckedChange(event: any) {
    this.stateService.sendCheckedState(this.item);
  }
}
