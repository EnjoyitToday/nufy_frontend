import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Playlist } from '../../user/playlist';
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
      text:"PERFEITO PARA VOCE",
      subtext:"TEXT TEXT TEXT TEXT TEXT TEXT"
    },
    {
      source:"/assets/img/Slippery When Wet.svg",
      text:"PERFEITO PARA VOCE",
      subtext:"TEXT TEXT TEXT TEXT TEXT TEXT"
    }
  ]

  public playlists:Playlist[]=[]

  playlistDetails(playlist:Playlist){
    console.log(playlist)
  }
}
