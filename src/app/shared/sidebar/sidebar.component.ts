import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  buttonsTop:string[]=[
    'Início',
    'Buscar',
    'Sua Biblioteca',
  ];
  buttonsMid:string[]=[
    'Criar Playlist',
    'Músicas Curtidas',
  ];
  buttonsPlaylist:string[]=[
    'button3',
    'button4',
    'button5',
    'button6',
    'button7',
    'button8',
    'button9',
    'button10'
  ];
}
