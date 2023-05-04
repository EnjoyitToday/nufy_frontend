import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router:Router,
  ) {
    // codigo pra requisitar um back e guardar info em cache
  }

  loggedUser:User;

  setUser(user:User){
    this.loggedUser = {
      user_id:user.user_id,
      username:user.username,
      email:user.email,
      photo_path:user.photo_path,
      playlists:user.playlists,
    }
  }
}
// {
//   user_id:'1',
//   profile_picture:'/assets/img/noProfilePicture.svg',
//   username:'Bananão',
//   email:'caue.ms01@gmail.com',
//   playlists:[
//     {
//       idPlaylist:'1',
//       playlist_name:'playlist1',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[

//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'2',
//       playlist_name:'playlist2',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'3',
//       playlist_name:'playlist3',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'4',
//       playlist_name:'playlist4',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'5',
//       playlist_name:'playlist5',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'6',
//       playlist_name:'playlist6',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'7',
//       playlist_name:'playlist7',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'8',
//       playlist_name:'playlist8',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'9',
//       playlist_name:'playlist9',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'10',
//       playlist_name:'playlist10',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'11',
//       playlist_name:'playlist11',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'12',
//       playlist_name:'playlist12',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'13',
//       playlist_name:'playlist13',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//     {
//       idPlaylist:'14',
//       playlist_name:'playlist14',
//       image:'/assets/img/noPlaylistPicture.svg',
//       musics:[
//         {
//           name:'N.A.D.A.B.O.M. 2 (part. Luccas Carlos e Don L)',
//           photo:'/assets/img/nadabom2.svg',
//           album:'.155',
//           composer:'Costa Gold, Luccas Carlos, Don L',
//           timestamp:'4:15',
//           path:'/assets/music/N.A.D.A.B.O.M.2.mp3'
//         },
//         {
//           name:'Antes',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:49',
//           path:'/assets/music/Matuê - Antes.mp3'
//         },
//         {
//           name:'Gorilla Roxo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'2:45',
//           path:'/assets/music/Matuê - Gorilla Roxo.mp3'
//         },
//         {
//           name:'Máquina do Tempo',
//           photo:'/assets/img/matue-maquinadotempo.svg',
//           album:'Máquina do Tempo',
//           composer:'Matuê',
//           timestamp:'3:50',
//           path:'/assets/music/Matuê - MáquinaDoTempo.mp3'
//         },
//       ]
//     },
//   ]
// }
