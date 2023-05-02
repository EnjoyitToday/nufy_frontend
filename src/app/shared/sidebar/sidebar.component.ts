import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/services/user/playlist';
import { UserService } from 'src/app/services/user/user.service';
import { SidebarButtons } from './sidebarButtons.interface';
import { PlaylistDetailsService } from 'src/app/main/playlist-details/playlist-details.service';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';
import { ButtonsMid } from './buttonsMid.interface';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(
    private userdata:UserService,
    private detailsService:PlaylistDetailsService,
    private sidebarService:SidebarService
  ){}

  buttonsTop:SidebarButtons[]=[
    {
      buttonName:'Início',
      buttonRouter:'/main'
    },
    {
      buttonName:'Buscar',
      buttonRouter:'/main/search'
    },
    {
      buttonName:'Sua Biblioteca',
      buttonRouter:'/main'
    }
  ]


  buttonsMid:ButtonsMid[]=[
    {
      name:'Criar Playlist',
      activateFunction:'createPlaylist()'
    },
    {
      name:'Músicas Curtidas',
      activateFunction:''
    }
  ];

  @Input()
  buttonsPlaylist:Playlist[]=[];

  ngOnInit(): void {
    this.buttonsPlaylist = this.userdata.loggedUser.playlists
  }


  intoPlaylist(playlist:Playlist){
    this.detailsService.getMusics(playlist);
  }

  createPlaylist(){
    this.sidebarService.createPlaylist()
  }

}
