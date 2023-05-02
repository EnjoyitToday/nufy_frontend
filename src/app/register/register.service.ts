import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpclient:HttpClient
  ) { }

  cadasterUser(username:string,password:string,email:string){
    const data={
      username:username,
      password:password,
      email:email
    }

    this.httpclient.post('http://exemplo.com/api/usuarios', data)
    .subscribe((response) => {
      console.log('Requisição enviada com sucesso!', response);
    }, (error) => {
      console.error('Ocorreu um erro ao enviar a requisição', error);
    });
  }
}
