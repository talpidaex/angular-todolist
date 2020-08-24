import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../../services/account.service';

//Login kontrolleri için gerekli olan class
//Guardlar service oldukları için Injectiable kullanmamız gerekli!
@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private accountService:AccountService,private router : Router){}
    //route => Gitmek istediği yer, state => bulunduğu yer
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn();
        if(logged){
            return true;
        }
        //yönlendirme işlemi eğer logged false dönerse!
        this.router.navigate(["login"]);
        return false;
    }



}
