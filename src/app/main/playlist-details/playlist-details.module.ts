import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDetailsComponent } from './playlist-details.component';
import { RouterModule } from '@angular/router';
import { UserModule } from 'src/app/services/user/user.module';



@NgModule({
  declarations: [
    PlaylistDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ]
})
export class PlaylistDetailsModule { }
