import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private formBuilder:FormBuilder,
    private loginService:LoginService
  ) { }

  form:FormGroup

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      password:['']
    });
  }

  async submit(){
    const username = this.form.get('username')?.value
    const password = this.form.get('password')?.value
    await this.loginService.submit(username,password);
  }


}
