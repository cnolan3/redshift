import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'ngx-flash-messages';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http,
              private jwtHelperService: JwtHelperService,
              private flashMessagesService: FlashMessagesService) { }

  /**
   * send a user registration request to back end
   *
   * @param    user new user object
  **/
  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + '/users/register', user, { headers: headers })
      .map(res => res.json())
      .catch(err => {
        if(err._body == 'IncompleteUserObject')
          console.log('incomplete');
//          this.flashMessagesService.show('User Info Incomplete', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else if(err._body == 'UserAlreadyExists')
          this.flashMessagesService.show('Username Already Exists', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else if(err._body == 'Error')
          this.flashMessagesService.show('Server Error', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else
          this.flashMessagesService.show('Unknown Error', { classes: ['alert', 'alert-warning'], timeout: 5000 });

        return Observable.throw(err);
      });
  }

  /**
   * send a user authentication request to back end
   *
   * @param    user user object
  **/
  authUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiUrl + '/users/authenticate', user, { headers: headers })
      .map(res => res.json())
      .catch(err => {
        if(err._body == 'IncompleteUserObject')
          console.log('incomplete');
        else if(err._body == 'UserNotFound')
          this.flashMessagesService.show('Username Not Found', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else if(err._body == 'WrongPassword')
          this.flashMessagesService.show('Incorrect Password', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else if(err._body == 'Error')
          this.flashMessagesService.show('Server Error', { classes: ['alert', 'alert-warning'], timeout: 5000 });
        else
          this.flashMessagesService.show('Unknown Error', { classes: ['alert', 'alert-warning'], timeout: 5000 });

        return Observable.throw(err);
      });
  }

  /**
   * put user data into local storage
   *
   * @param    token user access token
   * @param    user user data object
  **/
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * get user data from local storage
  **/
  localUserData() {
    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   * check if the current user is logged in
  **/
  loggedIn() {
    const token: string = this.jwtHelperService.tokenGetter();

    if(!token) {
      return false;
    }

    return !this.jwtHelperService.isTokenExpired(token);
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    return token;
  }
  
  /**
   * log out the current user
  **/
  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
