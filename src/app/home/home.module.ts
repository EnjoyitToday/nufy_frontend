import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PlaybarModule } from '../shared/playbar/playbar.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlaybarModule,
    SidebarModule
  ]
})
export class HomeModule { }
