import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingListItemComponent} from '../shopping-list-item/shopping-list-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DontForgetTheRamenWeb';
}
