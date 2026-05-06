import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { MessageService } from 'primeng/api';
import { ShoppingListItem } from './state-service';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;

  constructor(private messageService: MessageService) {

  }

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/hub/shoppingitem', {accessTokenFactory: () => localStorage.getItem('token') || ''})
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start()
      .then(() => {
        //this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `Connected to SignalR Server!` });
      })
      .catch(err => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'DontForgetTheRamen', detail: `Cannot connect to SignalR Server!` });
      });
  }

  onNewItem(callback: (shoppingListItem: ShoppingListItem) => void) {
    this.hubConnection.on('NewItem', callback);
  }

  changeCheckedState(callback: (shoppingListItem: ShoppingListItem, username: string) => void) {
    this.hubConnection.on('ChangedCheckedItem', callback);
  }

  /*sendChangeCheckedState(shoppingListItem: ShoppingListItem, username: string) {
    this.hubConnection.invoke('SendCheckedUpdate', shoppingListItem, username);
  }*/

  onUpdatedItem(callback: (shoppingListItem: ShoppingListItem, username: string) => void) {
    this.hubConnection.on('UpdatedItem', callback);
  }

}
