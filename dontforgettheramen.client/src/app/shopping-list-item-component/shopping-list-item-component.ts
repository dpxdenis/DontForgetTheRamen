import { Component, Input } from '@angular/core';
import { ShoppingListItem } from '../services/shopping-service';

@Component({
  selector: 'app-shopping-list-item',
  standalone: false,
  templateUrl: './shopping-list-item-component.html',
  styleUrl: './shopping-list-item-component.scss',
})
export class ShoppingListItemComponent {
  @Input() item: ShoppingListItem = new ShoppingListItem(0, "Demo Article", "admin", 1, "yes a article", 7.77, "Kaufland", false);
}
