import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDetailsComponent } from './playlist-details.component';
import { RouterModule } from '@angular/router';
import { UserModule } from 'src/app/services/user/user.module';
import { PlaybarModule } from 'src/app/shared/playbar/playbar.module';
import { FormModule } from '@coreui/angular';
import { ModalComponent } from '../../shared/add-music/add-music-modal';
import { AddMusicModule } from '../../shared/add-music/add-music.module';

@NgModule({
  declarations: [
    PlaylistDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    PlaybarModule,
    FormModule,
    AddMusicModule,
  ]
})
export class PlaylistDetailsModule { }
