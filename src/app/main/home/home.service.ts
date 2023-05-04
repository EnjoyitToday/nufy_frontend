import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { Playlist } from 'src/app/services/user/playlist';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public playlists:Playlist[]=[]

  constructor(
    private playlistService:PlaylistService,
    private router:Router
  ) { }

  async setHome(){
    this.playlists =  await this.playlistService.getPublicPlaylist();
    this.router.navigate(['main']);
    return
  }
}
