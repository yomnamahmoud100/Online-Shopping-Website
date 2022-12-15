import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpUser} from "../../../utilities/signUpUser";
import {SignupService} from "../../../services/signUp/signup.service";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/loginService/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name  = localStorage.getItem('name');
  email = localStorage.getItem('email');


  constructor(private data:SignupService ,private _router:Router ,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this._router.navigate(['/home']);
    this.loginService.menuDisAppeard();
    localStorage.setItem('isLoggedIn','false')
  }
}
