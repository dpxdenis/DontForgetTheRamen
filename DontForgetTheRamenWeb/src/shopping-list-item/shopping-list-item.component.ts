import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-shopping-list-item',
  imports: [MatCardModule,MatCheckboxModule,MatIconModule],
  templateUrl: './shopping-list-item.component.html',
  styleUrl: './shopping-list-item.component.scss'
})
export class ShoppingListItemComponent {

}
