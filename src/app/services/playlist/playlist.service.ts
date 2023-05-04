import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { AuthService } from '../../auth/auth.service';
import { firstValueFrom } from 'rxjs';
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
  };

  async removeMusicToPlaylist(addMusicOnPlaylistDTO: any) {
    return await this.httpClient.request("DELETE", `${this.configService.apiUrl}/playlist/music`, {
      body: addMusicOnPlaylistDTO,
      headers: this.authService.headers.headers,
    }).toPromise()
  };

  async getPublicPlaylist():Promise<any>{
    try{
      const response = await firstValueFrom(this.httpClient.get(`${this.configService.apiUrl}/playlist`,this.authService.headers))
      console.log(response);
      return response;
    }catch (error) {
      console.error('LoginError ', error);
      throw error;
    }
  }

}
