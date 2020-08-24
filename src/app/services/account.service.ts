import { Injectable } from '@angular/core';
import { User } from '../components/login/User';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn=false;
  
  login(user:User):boolean{
    if(user.email=='kafein@kafein.com' && user.password=='admin'){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.email);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
  }

}
