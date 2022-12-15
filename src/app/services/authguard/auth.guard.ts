import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {LoginService} from "../loginService/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router) {
  }
  canActivate():boolean {
    if (this.loginService.isLoggedin == true) {
      return true;
    } else {
      this.router.navigate(['/home']);

      return false;
    }

  }

}
