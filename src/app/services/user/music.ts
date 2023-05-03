import { Album } from "./album";

export interface Music{
  id:number;
  name:string;
  photo:string;
  composer:string;
  album:Album;
  timestamp:string;
  path:string;
}
