import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybarComponent } from './playbar.component';



@NgModule({
  declarations: [
    PlaybarComponent
  ],
  exports: [
    PlaybarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaybarModule { }
