import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingListItemComponent} from '../shopping-list-item/shopping-list-item.component';
import {MatTreeModule} from '@angular/material/tree';
import {ShoppingListItem, ShoppingListService} from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingListItemComponent, MatTreeModule],
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
