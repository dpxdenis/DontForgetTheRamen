import { Component, ViewContainerRef, ViewChild, ComponentRef, OnInit } from '@angular/core';
import { ShoppingListItemComponent } from '../shopping-list-item-component/shopping-list-item-component';
import { ShoppingListItem } from '../services/shopping-service';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.scss',
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingListItem[] = [];

  ngOnInit(): void {
    this.addDemoData();
  }

  addDemoData() {
    for (let i = 0; i < 10; i++) {
      this.items.push(new ShoppingListItem(0, "Demo Article", "admin", 1, "yes a article", 7.77, "Kaufland", i < 5));
    }
  }

  get openItems() {
    return this.items.filter(i => !i.checked);
  }

  get closedItems() {
    return this.items.filter(i => i.checked);
  }
}
