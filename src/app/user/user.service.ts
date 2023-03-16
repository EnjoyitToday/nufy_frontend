import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    // codigo pra requisitar um back e guardar info em cache
  }

  loggedUser:User=
    {
      user_id:'1',
      profile_picture:'/assets/img/noProfilePicture.svg',
      name:'Carlos Eduardo',
      username:'Bananão',
      password:'12345',
      favorite_songs:[],
      playlists:[
        {
          idPlaylist:'1',
          playlist_name:'playlist1',
          musics:[
            'musica1',
            'musica2',
            'musica3',
            'musica4',
          ]
        },
        {
          idPlaylist:'1',
          playlist_name:'playlist2',
          musics:[
            'musica1',
            'musica2',
            'musica3',
            'musica4',
          ]
        },
        {
          idPlaylist:'1',
          playlist_name:'playlist3',
          musics:[
            'musica1',
            'musica2',
            'musica3',
            'musica4',
          ]
        },
        {
          idPlaylist:'1',
          playlist_name:'playlist4',
          musics:[
            'musica1',
            'musica2',
            'musica3',
            'musica4',
          ]
        },
        {
          idPlaylist:'1',
          playlist_name:'playlist5',
          musics:[
            'musica1',
            'musica2',
            'musica3',
            'musica4',
          ]
        },
      ]
    }
}
