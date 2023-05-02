import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(
    private configService:ConfigService,
    private httpClient:HttpClient,
    private authService:AuthService,
  ){}

  submit(username:string,password:string){
     this.httpClient.post(`${this.configService.apiUrl}/auth/login`, {
        username: username,
        password: password
    }).subscribe((e)=>{
      this.authService.login(e)
    })
  }
}
