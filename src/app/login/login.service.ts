import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { firstValueFrom } from 'rxjs';
import { HomeService } from '../main/home/home.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(
    private configService:ConfigService,
    private httpClient:HttpClient,
    private authService:AuthService,
    private homeService:HomeService
  ){}

  async submit(username:string,password:string){
    try{
      const response = await firstValueFrom(this.httpClient.post(`${this.configService.apiUrl}/auth/login`, {
        username: username,
        password: password
      }));
      await this.authService.login(response);
      await this.homeService.setHome();
    }catch (error) {
      console.error('LoginError ', error);
      throw error;
    }
  }
}
