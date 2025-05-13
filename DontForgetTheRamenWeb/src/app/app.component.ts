import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingListItemComponent} from '../shopping-list-item/shopping-list-item.component';
import {ShoppingListItem, ShoppingListService} from './services/shopping-list.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingListItemComponent, MatExpansionModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected data: ShoppingListItem[] = [];
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingList.getData().subscribe(shoppingList => {
      this.data = shoppingList;
    });
  }
  title = 'DontForgetTheRamenWeb';


}
