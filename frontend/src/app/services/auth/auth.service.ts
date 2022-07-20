import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthDTO } from 'src/app/models/auth-dto';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${environment.apiUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  login(user: AuthDTO) {
    return this.http.get(`${this.url}/${user.email}/${user.password}`);
  }

  signup(signupUser: AuthDTO) {
    return this.http.post(`${this.url}`, signupUser);
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getlocalStorage(key: string) {
    return localStorage.getItem(`${key}`);
  }
}
