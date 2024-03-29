import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PlaybarModule } from '../shared/playbar/playbar.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { PlaylistDetailsModule } from './playlist-details/playlist-details.module';
import { UserButtonModule } from '../shared/user-button/user-button.module';
import { SearchModule } from './search/search.module';
import { ProfileModule } from './profile/profile.module';
import { ModalComponent } from '../shared/add-music/add-music-modal';
import { AddMusicModule } from '../shared/add-music/add-music.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PlaybarModule,
    SidebarModule,
    RouterModule,
    HomeModule,
    PlaylistDetailsModule,
    UserButtonModule,
    SearchModule,
    ProfileModule,
  ]
})
export class MainModule { }
