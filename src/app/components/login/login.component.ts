import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { User } from './User';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    user:User = new User();
  constructor(private accountService : AccountService,private router:Router,private alertService: AlertService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){

      this.accountService.login(this.user);
      if(this.accountService.isLoggedIn()){
          this.router.navigate(["dashboard"]);
      }else {
        this.alertService.errorMessage("Giriş Başarısız,tekrar deneyiniz!");
      }
  }
}
