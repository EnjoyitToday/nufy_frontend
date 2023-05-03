import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { FaqModule } from './faq/faq.module';
import { RegisterModule } from './register/register.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/add-music/add-music-modal';
import { AddMusicModule } from './shared/add-music/add-music.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    LoginModule,
    FaqModule,
    RegisterModule,
    ReactiveFormsModule,
    MainModule,
    HttpClientModule,
    AddMusicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
