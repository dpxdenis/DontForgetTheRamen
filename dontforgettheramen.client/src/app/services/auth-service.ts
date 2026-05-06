import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class AuthResult {
  public token: string;
  constructor(token: string) {
    this.token = token;
  }

}

export class RegisterError {
  public code: string;
  public description: string;

  constructor(code: string, description: string) {
    this.code = code;
    this.description = description;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  username: string = "";

  constructor(private http: HttpClient) {

  }

  register(username: string, password: string): Observable<object> {
    return this.http.post('/api/auth/register', { username, password });
  }

  login(username: string, password: string): Observable<AuthResult> {
    return this.http.post<AuthResult>('/api/auth/login', {username, password});
  }
}
