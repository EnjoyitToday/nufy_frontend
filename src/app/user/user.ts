import { UserPlaylist } from "./UserPlaylist";

export interface User {
  user_id:string;
  profile_picture:string;
  name:string;
  username:string;
  password:string;
  favorite_songs:String[];
  playlists:UserPlaylist[];
}
