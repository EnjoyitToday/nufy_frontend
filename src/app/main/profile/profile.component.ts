import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public form:FormGroup

  constructor(
    public activeUser:UserService,
    public formBuilder:FormBuilder,
    private profileService:ProfileService
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      password_confirm:[''],
    })
  }

  submit(){
    let data;
    const username = this.form.get('username')
    const email = this.form.get('email')
    const password = this.form.get('password')
    const password_confirm = this.form.get('password_confirm')

    if(String(username) != this.activeUser.loggedUser.username){
      return
    }

    if(password != password_confirm){
      return
    }


    // this.profileService.updateProfile();
  }
}
