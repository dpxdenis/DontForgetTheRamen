import { Component } from '@angular/core';
import { StateService } from '../services/state-service';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private stateService: StateService) {

  }

  login() {
    this.stateService.handleLogin(this.username, this.password);
  }
}
