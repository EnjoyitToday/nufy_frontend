import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {

  selected_user:User;

  constructor(
    public userdata: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.selected_user = this.userdata.loggedUser
  }

  logout() {
    this.authService.logout()
  }
}
