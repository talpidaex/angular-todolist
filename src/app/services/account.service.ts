import { Injectable } from '@angular/core';
import { User } from '../components/login/User';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable()
export class AccountService {

  constructor(private apiService: ApiService, private router: Router, private alertService: AlertService) { }
  loggedIn = false;

  login(user: User) {

    this.apiService.getUserToDo(user.email).subscribe((res: any) => {
      
      if (user.email === res.email && user.password === res.password) {
        
        this.loggedIn = true;
        localStorage.setItem("isLogged", user.email);
        this.router.navigate(["dashboard"]);
      } else {
        this.alertService.errorMessage("Giriş Başarısız,tekrar deneyiniz!");
      } (err) => {
        console.error.bind(err);
      }
    })

  }

  /* Eski sürüm -- 3001'de çalışan --- */

  //  login(user:User):boolean{
  //      if(user.email==='kafein@kafein.com' && user.password==='admin'){
  //       this.loggedIn = true;
  //        localStorage.setItem("isLogged",user.email);
  //       return true;
  //      }
  //     return false;

  // }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

}
