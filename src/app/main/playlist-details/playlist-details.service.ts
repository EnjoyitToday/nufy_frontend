import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfigService } from 'src/app/config/config.service';
import { Music } from 'src/app/services/user/music';
import { Playlist } from 'src/app/services/user/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDetailsService {

  public selected_playlist:Playlist;
  public playlist_musics:Music[];

  constructor(
    private router:Router,
    private httpClient:HttpClient,
    private configService:ConfigService,
    private authService:AuthService
  ) { }

  async getMusics(playlist:Playlist){
    try {
      this.httpClient.get(`${this.configService.apiUrl}/playlist/${playlist.id}`,this.authService.headers)
      .subscribe((e:any)=>{
        this.selected_playlist = {
          id:e.id,
          isPrivate:e.isPrivate,
          name:e.name,
          photo_path:e.photo_path
        }
        this.playlist_musics = e.music
        this.router.navigate([`/main/details/${playlist.id}`])
      })
    } catch (error) {
      console.error(error);
    }
    return
  }
}
