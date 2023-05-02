import { Playlist } from "./playlist";

export interface User {
  user_id:string;
  photo_path:string;
  username:string;
  playlists:Playlist[];
  email:string;
}
