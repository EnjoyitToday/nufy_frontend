import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Playlist } from '../../services/user/playlist';
import { Propaganda } from './propaganda';
import { PlaylistDetailsService } from '../playlist-details/playlist-details.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public propagandas:Propaganda[]=[
    {
      source:"/assets/img/Slippery When Wet.svg",
      text:"PERFEITO PARA VOCÊ!",
      subtext:"CONFIRA JÁ ALBUNS QUE BATEM COM SUA VIBE"
    },
    {
      source:"/assets/img/Slippery When Wet.svg",
      text:"ESCUTE JÁ!",
      subtext:"PENSAMOS QUE GOSTARIA DISSO"
    }
  ]

  public playlists:Playlist[]=[]

  constructor(
    private detailsService:PlaylistDetailsService,
    private playlistService:PlaylistService,
    private homeService:HomeService
  ){}

  ngOnInit(){
    this.playlists = this.homeService.playlists
  }

  intoPlaylist(playlist:Playlist){
    this.detailsService.getMusics(playlist);
  }
}
