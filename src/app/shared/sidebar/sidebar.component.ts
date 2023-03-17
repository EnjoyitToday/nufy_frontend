import { Component, Input } from '@angular/core';
import { Playlist } from 'src/app/user/playlist';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private userdata:UserService
  ){
    this.buttonsPlaylist = this.userdata.loggedUser.playlists
  }

  buttonsTop:string[]=[
    'Início',
    'Buscar',
    'Sua Biblioteca',
  ];


  buttonsMid:string[]=[
    'Criar Playlist',
    'Músicas Curtidas',
  ];

  @Input()
  buttonsPlaylist:Playlist[]=[];
}
