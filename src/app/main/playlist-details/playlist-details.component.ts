import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { CurrentMusicService } from 'src/app/services/current_music/current_music.service';
import { Music } from 'src/app/services/user/music';
import { Playlist } from 'src/app/services/user/playlist';
import { UserService } from 'src/app/services/user/user.service';
import { PlaylistDetailsService } from './playlist-details.service';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  public selected_playlist: Playlist;
  public playlist_musics: Music[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public userService: UserService,
    private currentMusicService: CurrentMusicService,
    private configService: ConfigService,
    private detailsService: PlaylistDetailsService,
    private playlistService: PlaylistService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.selected_playlist = this.detailsService.selected_playlist
    this.playlist_musics = this.detailsService.playlist_musics

  }

  getPlaylist(id: string) {
    this.userService.loggedUser.playlists.map(
      (e) => {
        if (e.id == Number(id)) {
          this.selected_playlist = e;
        }
      }
    );
  };

  playAudio(music: Music) {
    this.currentMusicService.playAudio(music);
  }

  async deleteMusicFromPlaylist(musicId: number) {
    const res: any = await this.playlistService.removeMusicToPlaylist({ music_id: musicId, playlist_id: this.detailsService.selected_playlist.id })
    this.detailsService.playlist_musics = res?.music
    this.reloadCurrentRoute()
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
