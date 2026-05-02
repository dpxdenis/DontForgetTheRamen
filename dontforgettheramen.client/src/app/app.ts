import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      }
    ];
  }

  protected readonly title = signal('dontforgettheramen.client');
}
