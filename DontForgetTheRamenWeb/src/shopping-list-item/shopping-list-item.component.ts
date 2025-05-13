import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {ShoppingListItem} from '../app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  imports: [MatCardModule,MatCheckboxModule,MatIconModule],
  templateUrl: './shopping-list-item.component.html',
  styleUrl: './shopping-list-item.component.scss'
})
export class ShoppingListItemComponent {
  @Input() model: ShoppingListItem = new ShoppingListItem(-1, "Sample Item", 10, "This is a description", 999.99, "nowhere", false);

  checkedChange(state: boolean) {
    this.model.checked = state;
  }
}
