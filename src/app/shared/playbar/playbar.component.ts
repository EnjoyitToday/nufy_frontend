import { Component } from '@angular/core';
import { ButtonsArray } from './buttonsArray';

@Component({
  selector: 'playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css']
})
export class PlaybarComponent {

  public buttonsArray:ButtonsArray[]=[
    {
      classStyle:"tiny-buttons",
      source:"/assets/img/RandomQueue.svg"
    },
    {
      classStyle:"tiny-buttons",
      source:"/assets/img/Back.svg"
    },
    {
      classStyle:'play-button',
      source:'/assets/img/Play.svg'
    },
    {
      classStyle:"tiny-buttons",
      source:"/assets/img/Next.svg"
    },
    {
      classStyle:"tiny-buttons",
      source:"/assets/img/Repeat.svg"
    }
  ]
}
