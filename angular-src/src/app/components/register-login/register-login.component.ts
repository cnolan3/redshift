import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {
  @Input() name;

  mode: Boolean;
  modeName: String;
  opMode: String;

  firstname: String;
  lastname: String;
  email: String;
  username: String;
  password: String;
  passwordConf: String;

  constructor(private authService: AuthService,
              private validateService: ValidateService,
              private router: Router,
              private flashMessagesService: FlashMessagesService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.mode = false;
    this.modeName = "Register";
    this.opMode = "Login";
  }

  /**
   * switch between login and register modes
  **/
  switchMode() {
    this.mode = !this.mode;
    let next = this.opMode;
    this.opMode = this.modeName;
    this.modeName = next;
  } 

  /**
   * send login/registration submission
  **/
  onSubmitButton() {
    /// login
    if(this.mode) {
      let user = {
        username: this.username,
        password: this.password
      }

      /// validate user
      if(!this.validateService.validateLogin(user)) {
        this.flashMessagesService.show('User Login Incomplete', {classes: ['alert', 'alert-danger'], timeout: 3000 });
        return false;
      }
      
      /// login user
      this.authService.authUser(user).subscribe(data => {
        if(data)
          this.activeModal.close('Close click');

        this.authService.storeUserData(data.token, data.user);
      });
    }

    /// register
    else {
      let user = {
        username: this.username,
        password: this.password,
        passwordConf: this.passwordConf,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      }

      /// validate user
      if(!this.validateService.validateRegister(user)) {
        this.flashMessagesService.show('User Registration Incomplete', {classes: ['alert', 'alert-danger'], timeout: 3000 });
        return false;
      }

      if(!this.validateService.validateUsername(user.username)) {
        this.flashMessagesService.show('Invalid Username, Must Be At Least 6 Characters, No Special Characters', {classes: ['alert', 'alert-danger'], timeout: 5000 });
        return false;
      }

      if(!this.validateService.validatePassword(user.password)) { 
        this.flashMessagesService.show('Invalid Password, Must Be At Least 6 Characters', {classes: ['alert', 'alert-danger'], timeout: 5000 });
        return false;
      }

      if(!this.validateService.validatePassConfirm(user.password, user.passwordConf)) {
        this.flashMessagesService.show('Passwords Do Not Match', {classes: ['alert', 'alert-danger'], timeout: 3000 });
        return false;
      }

      if(!this.validateService.validateEmail(user.email)) {
        this.flashMessagesService.show('Invalid Email', {classes: ['alert', 'alert-danger'], timeout: 3000 });
        return false;
      }
   
      /// register user
      this.authService.registerUser(user).subscribe((data) => {
        if(data)
          this.activeModal.close('Close click');

        this.authService.storeUserData(data.token, data.user);
      });
    }
  }

  /**
   * get login/register mode
  **/
  getMode() {
    return this.mode;
  }

}
