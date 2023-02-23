import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';



@NgModule({
  declarations: [
    FaqComponent
  ],
  exports: [
    FaqComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FaqModule { }
