import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config/config.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpclient: HttpClient,
    private configService: ConfigService,
  ) { }

  async cadasterUser(username: string, password: string, email: string) {
    const data = {
      username: username,
      password: password,
      email: email
    }

    return await this.httpclient.post(`${this.configService.apiUrl}/users`, data)
      .subscribe((response) => {
        console.log('Requisição enviada com sucesso!', response);
      }, (error) => {
        console.error('Ocorreu um erro ao enviar a requisição', error);
      });
  }
}
