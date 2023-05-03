import { NgModule } from '@angular/core';
import { ModalComponent } from '../../shared/add-music/add-music-modal';
import { FormModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    FormModule,
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ]
})
export class AddMusicModule { }
