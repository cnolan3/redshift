import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterLoginComponent } from '../register-login/register-login.component';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Number;
  images: Number;
  confirmed: Number;
  articles: any[];

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.users = 0;
    this.images = 0;
    this.confirmed = 0;

    this.dataService.getStats().subscribe((data) => {
      this.users = data.users;
      this.images = data.images;
      this.confirmed = data.confirmed;
    });

    this.dataService.getLatestArts(2, 0).subscribe((data) => {
      this.articles = data.articles;
    });
  }

  onArt(id) {
    this.router.navigate(['/article', id]);
  }
}
