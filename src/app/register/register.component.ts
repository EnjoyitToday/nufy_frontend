import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form:FormGroup

  constructor(
    public formBuilder:FormBuilder,
    private registerService:RegisterService
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      password:[''],
      email:[''],
      email_confirm:[''],
    })
  }

  onScroll(event: Event) {
    const leftPanel = event.target as HTMLElement;
    const scrollTop = leftPanel.scrollTop;
    const rightPanel = leftPanel.nextElementSibling as HTMLElement;
    rightPanel.style.transform = `translateY(${-scrollTop}px)`;
  }

  submit(){
    const username = this.form.get('username')?.value
    const password = this.form.get('password')?.value
    const email = this.form.get('email')?.value
    const email_confirm = this.form.get('email_confirm')?.value
    if(email != email_confirm){
      console.log('email diferente')
      return
    }
    this.registerService.cadasterUser(username,password,email);

  }
}
