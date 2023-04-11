import { Music } from "./music";

export interface Playlist{
  idPlaylist:string;
  playlist_name:string;
  musics:Music[];
  image:string;
}
