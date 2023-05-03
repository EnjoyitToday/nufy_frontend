import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent {

  constructor(
    public userdata: UserService,
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout()

  }
}
