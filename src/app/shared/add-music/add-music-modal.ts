import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music/music.service';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { PlaylistDetailsService } from '../../main/playlist-details/playlist-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: 'add-music.component.html',
  styleUrls: ['add-music.component.css'],
})
export class ModalComponent implements OnInit {
  show: boolean = false;

  musics: any[];
  musicName: string;

  constructor(private musicService: MusicService,
    private detailService: PlaylistDetailsService,
    private playlistService: PlaylistService,
    private router: Router) { }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

  onChangeInput(event: any) {
    const obsMusics = this.musicService.findByName(event.data)

    obsMusics.subscribe(value => {
      this.musics = <any[]>value;
      console.log(this.musics)
    })
  }

  hideModal() {
    this.show = false;
  };

  addMusic(music: any) {

    this.playlistService.addMusicOnPlaylist({
      music_id: music,
      playlist_id: this.detailService.selected_playlist.id,
    }).subscribe((event: any) => {
      this.show = false;
      this.detailService.playlist_musics = event.music
      this.reloadCurrentRoute()
    })
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
