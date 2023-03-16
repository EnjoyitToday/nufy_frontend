import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './user-button.component';



@NgModule({
  declarations: [
    UserButtonComponent,
  ],
  exports: [
    UserButtonComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class UserButtonModule { }
