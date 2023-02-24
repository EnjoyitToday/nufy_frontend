import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailFormControl1 = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onScroll(event: Event) {
    const leftPanel = event.target as HTMLElement;
    const scrollTop = leftPanel.scrollTop;
    const rightPanel = leftPanel.nextElementSibling as HTMLElement;
    rightPanel.style.transform = `translateY(${-scrollTop}px)`;
  }

}
