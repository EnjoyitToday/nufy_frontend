import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private authService: AuthService,
  ) { }

  addMusicOnPlaylist(addMusicOnPlaylistDTO: any) {
    return this.httpClient.post(`${this.configService.apiUrl}/playlist/music`, {
      addMusicOnPlaylistDTO
    }, this.authService.headers)
  }
  async removeMusicToPlaylist(addMusicOnPlaylistDTO: any) {
    console.log(addMusicOnPlaylistDTO)
    return await this.httpClient.request("DELETE", `${this.configService.apiUrl}/playlist/music`, {
      body: addMusicOnPlaylistDTO,
      headers: this.authService.headers.headers,
    }).toPromise()
  }

}
