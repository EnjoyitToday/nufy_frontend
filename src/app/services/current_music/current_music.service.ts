import { Injectable } from '@angular/core';
import { Music } from 'src/app/services/user/music';

@Injectable({
  providedIn: 'root'
})
export class CurrentMusicService {

  currentMusic:HTMLAudioElement= new Audio();

  constructor() { }

  playAudio(music:Music){
    this.currentMusic.pause
    this.currentMusic.src = `${music.path}`;
    this.currentMusic.load();
    this.currentMusic.play();
  }
}
