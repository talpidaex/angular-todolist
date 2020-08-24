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
    private accountService: AccountService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  isLoggedin() {
    return this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logOut();
    this.alertService.successMessage("Çıkış başarılı!");
    this.router.navigate(["login"]);
  }

}
