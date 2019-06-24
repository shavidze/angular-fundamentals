import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  constructor() {}
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Saba',
      lastName: 'Shavidze',
      password: password
    };
  }

  isAuthenticated() {
    console.log('amowmebs');
    return !!this.currentUser;
  }
}
