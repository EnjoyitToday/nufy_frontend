import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { AlertModule } from '@coreui/angular';
import { AccordionModule, SharedModule } from '@coreui/angular';




@NgModule({
  declarations: [
    FaqComponent
  ],
  exports: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    AccordionModule,
    SharedModule
  ]
})
export class FaqModule { }
