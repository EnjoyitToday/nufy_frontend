import { Component } from '@angular/core';
import { MusicService } from '../../services/music/music.service';
import { PlaylistDetailsService } from '../playlist-details/playlist-details.service';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private musicService: MusicService,
    private detailService: PlaylistDetailsService,
    private playlistService: PlaylistService,
    private router: Router) { }


  musics: any[];
  musicName: string;

  onChangeInput(event: any) {
    const obsMusics = this.musicService.findByName(event.data)

    obsMusics.subscribe(value => {
      this.musics = <any[]>value;
      console.log(this.musics)
    })
  }

  addMusic(music: any) {
    this.playlistService.addMusicOnPlaylist({
      music_id: music,
      playlist_id: this.detailService.selected_playlist.id,
    }).subscribe((event: any) => {
      this.detailService.playlist_musics = event.music
    })
  }

}
