import { Component } from '@angular/core';
import { StateService } from '../services/state-service';
import { AuthService, RegisterError } from '../services/auth-service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private messageService: MessageService, private stateService: StateService) {
    if (localStorage.getItem('token') && localStorage.getItem('username')) {
      this.stateService.username = localStorage.getItem('username')!;
      this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `Welcome back, @${this.stateService.username}!` });
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `Welcome back, @${this.username}!` });
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', this.username);
        this.stateService.username = this.username;
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'DontForgetTheRamen', detail: `Login failed! Check your credentials.` });
      }

    });
  }

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'DontForgetTheRamen', detail: `Register successfull!` });
        this.login();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.error(errorResponse);
        let errors = '';
        errorResponse.error.forEach((item : RegisterError) => {
          errors += `\n${item.description}`;
        });

        this.messageService.add({ severity: 'error', summary: 'DontForgetTheRamen', detail: `Register failed!${errors}` });
      }

    });
  }
}
