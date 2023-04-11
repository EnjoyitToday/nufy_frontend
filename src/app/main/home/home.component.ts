import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Playlist } from '../../services/user/playlist';
import { Propaganda } from './propaganda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private userdata:UserService
  ){
    this.playlists = this.userdata.loggedUser.playlists
  }

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

  playlistDetails(playlist:Playlist){
    console.log(playlist)
  }
}
