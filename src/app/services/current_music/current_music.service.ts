import { Injectable } from '@angular/core';
import { Music } from 'src/app/services/user/music';

@Injectable({
  providedIn: 'root'
})
export class CurrentMusicService {

  audioInstance:HTMLAudioElement= new Audio();
  currentMusic:Music;

  constructor() { }

  setCurrentMusic(music:Music){
    this.currentMusic = music;
  }

  playAudio(music:Music){
    this.setCurrentMusic(music);
    this.audioInstance.pause
    this.audioInstance.src = `${music.path}`;
    this.audioInstance.load();
    this.audioInstance.play();
  }
}
