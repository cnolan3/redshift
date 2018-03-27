import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.localUserData().username;
  }

}
