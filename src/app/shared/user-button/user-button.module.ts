import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserButtonComponent } from './user-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserButtonComponent,
  ],
  exports: [
    UserButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class UserButtonModule { }
