import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public api: HttpClient,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      password_confirm: [''],
    })
  }

  async submit() {
    let data;
    const username = this.form.get('username')?.value
    const email = this.form.get('email')?.value
    const password = this.form.get('password')?.value
    const password_confirm = this.form.get('password_confirm')?.value
    console.log(email)
    var a = await this.authService.updateUser({ username, email, password })
    console.log(a)
    if (password != password_confirm) {
      return
    }


    // this.profileService.updateProfile();
  }
}
