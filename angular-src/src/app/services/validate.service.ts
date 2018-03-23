import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    return !(user.firstname === undefined ||
             user.lastname === undefined ||
             user.email === undefined ||
             user.username === undefined || 
             user.password === undefined || 
             user.passwordConf === undefined);
  }


  validateUsername(username) {
    const reg = /^[a-zA-Z0-9]{6,}/;
    return reg.exec(username);
  }

  validatePassword(password) {
    return (password.length >= 6);
  }

  validatePassConfirm(pass, passCon) {
    return (pass === passCon);
  }

  validateLogin(user) {
    return !(user.username === undefined ||
             user.password === undefined);
  }

  validateEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.exec(email);
  }
}
