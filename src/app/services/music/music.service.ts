import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  findByName(name: string) {
    return this.httpClient.get(`${this.configService.apiUrl}/musics?music_name=${name}`)
  }
}
