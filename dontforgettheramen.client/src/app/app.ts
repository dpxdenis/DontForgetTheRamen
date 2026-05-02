import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  protected readonly title = signal('dontforgettheramen.client');
}
