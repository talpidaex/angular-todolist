import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-logo-routes',
  templateUrl: './logo-routes.component.html',
  styleUrls: ['./logo-routes.component.scss']
})
export class LogoRoutesComponent implements OnInit {
  title = "Kafein Todo"
  constructor(
    public accountService: AccountService,
    public router: Router,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  isLoggedin():boolean {
    return this.accountService.isLoggedIn();
  }

  logOut():void {
    this.accountService.logOut();
    this.alertService.successMessage("Çıkış başarılı!");
    this.router.navigate(["login"]);
  }

  returnHomePage():void{

       if(this.isLoggedin()){
           this.router.navigate(["dashboard"]);
      }else {
            this.alertService.errorMessage("Hay aksi..")
        }
  }

}
