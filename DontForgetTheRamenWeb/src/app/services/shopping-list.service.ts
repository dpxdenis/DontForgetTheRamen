import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class ShoppingListItem{
  public itemId: number;
  public articleName: string;
  public createdBy: string;
  public quantity: number;
  public description: string;
  public price: number;
  public placeToBuy: string;
  public checked: boolean;
  constructor(itemId: number, articleName: string, createdBy:string, quantity: number, description: string, price: number, placeToBuy: string, checked: boolean) {
    this.itemId = itemId;
    this.articleName = articleName;
    this.createdBy = createdBy;
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.placeToBuy = placeToBuy;
    this.checked = checked;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<ShoppingListItem[]> {
    return this._httpClient.get<ShoppingListItem[]>('http://localhost:5000/api/data');
  }
}
