import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/loginService/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn :boolean =false;

  constructor(private _router :Router, private loginService:LoginService) {

  }

  ngOnInit(): void {

       this.isLoggedIn = this.loginService.isLoggedin;
    console.log('header')
    console.log(this.isLoggedIn);
  }

}
