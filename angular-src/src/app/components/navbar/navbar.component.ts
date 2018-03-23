import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterLoginComponent } from '../register-login/register-login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * open the login/register modal
  **/
  open() {
    const modalRef = this.modalService.open(RegisterLoginComponent);
    modalRef.componentInstance.name = 'World';
  }

  /**
   * return logged in status
  **/
  loggedIn() {
    return this.authService.loggedIn();
  }

  /**
   * log out current user
  **/
  logOut() {
    this.authService.logOut();
  }
}
