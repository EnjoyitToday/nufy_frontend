import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { AcessToken } from '../login/acessToken.interface';
import { User } from '../services/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged:boolean = false;
  userToken:string
  headers:any

  constructor(
    private userService:UserService,
    private router:Router,
    private httpClient:HttpClient,
    private configService:ConfigService
  ) { }

  async login(e:any){
    this.userToken =e.accessToken

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.userToken
      })
    };

    this.httpClient.get(`${this.configService.apiUrl}/users`,httpOptions)
    .subscribe((e:any)=>{
      this.userService.setUser(e);
    })
    this.headers = httpOptions;
    this.userLogged = true;
  }

  async logout(){
    this.userLogged=false;
    this.userToken ='';
    this.router.navigate([``]);
  }


  checkLogin():boolean{
     return this.userLogged;
  }
}
