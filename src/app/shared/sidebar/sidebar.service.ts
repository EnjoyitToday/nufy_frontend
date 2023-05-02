import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfigService } from 'src/app/config/config.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private httpClient:HttpClient,
    private configService:ConfigService,
    private authService:AuthService,
    private userService:UserService
  ) { }

  createPlaylist(){
    this.httpClient.post(`${this.configService.apiUrl}/playlist`,{
      playlist_name:'Playlist Nova'
    }
    ,this.authService.headers,).subscribe((e:any)=>{
      this.userService.loggedUser.playlists.push({
        id:e.id,
        name:e.name,
        isPrivate:e.isPrivate,
        photo_path:e.photo_path
      })
    })
  }
}
