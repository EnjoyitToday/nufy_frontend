import { Component } from '@angular/core';
import { Playlist } from './playlist';
import { Propaganda } from './propaganda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  public playlists:Playlist[]=[
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    },
    {
      image:"/assets/img/Slippery When Wet.svg",
      name:'baojove'
    }
  ]

}
