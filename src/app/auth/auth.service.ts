import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { firstValueFrom } from 'rxjs';
import { AcessToken } from '../login/acessToken.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: boolean = false;
  userToken: string
  headers: any

  constructor(
    private userService: UserService,
    private router: Router,
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  async login(e: any) {
    this.setToken(e)
    this.setHeaders()
    const userData = await this.getUserData();
    this.userService.setUser(userData);
    this.userLogged = true;
  };

  async getUserData(): Promise<any> {
    try {
      const response = await firstValueFrom(this.httpClient.get(`${this.configService.apiUrl}/users`, this.headers));
      return response;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };

  async updateUser(user: any) {
    try {
      const response = await firstValueFrom(this.httpClient.put(`${this.configService.apiUrl}/users`, user, this.headers));
      console.log(response)
      return response;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  }

  setToken(e: AcessToken) {
    this.userToken = e.accessToken
  };

  setHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.userToken
      })
    };
    this.headers = httpOptions;
  };

  async logout() {
    this.userLogged = false;
    this.userToken = '';
    this.router.navigate([``]);
  };

  checkLogin(): boolean {
    return this.userLogged;
  }
}
