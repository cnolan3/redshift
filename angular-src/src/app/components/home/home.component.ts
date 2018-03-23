import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterLoginComponent } from '../register-login/register-login.component';
import { AuthService } from '../../services/auth.service';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Number;
  images: Number;
  confirmed: Number;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.users = 0;
    this.images = 0;
    this.confirmed = 0;

    this.statsService.getStats().subscribe((data) => {
      this.users = data.users;
      this.images = data.images;
      this.confirmed = data.confirmed;
    });
  }
}
