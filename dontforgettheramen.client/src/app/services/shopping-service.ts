import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListItem, ShoppingListTempItem } from './state-service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {

  constructor(private http: HttpClient) {

  }

  getShoppingItems(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>("api/ShoppingListItem");
  }

  addNewShoppingItem(tempItem: ShoppingListTempItem): Observable<any> {
    return this.http.post("api/ShoppingListItem", tempItem);
  }
}
