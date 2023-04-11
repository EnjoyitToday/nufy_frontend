import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from 'src/app/services/user/music';
import { Playlist } from 'src/app/services/user/playlist';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit{

  private playlist_id:string = '';
  selected_playlist:Playlist;

  constructor(
    private activatedRoute:ActivatedRoute,
    public userdata:UserService
  ){}

  ngOnInit(): void {
    this.playlist_id = this.activatedRoute.snapshot.paramMap.get("id")!
    this.userdata.loggedUser.playlists.map(
      (e)=>{
        if(e.idPlaylist == this.playlist_id){
          this.selected_playlist = e;
        }
      }
    )
  }

  playAudio(music:Music){
    let audio = new Audio();
    audio.src = `${music.path}`;
    audio.load();
    audio.play();
  }
}
