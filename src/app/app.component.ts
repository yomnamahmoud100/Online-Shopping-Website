import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/loginService/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Online Shopping';

  constructor(public loginService:LoginService) {
  }
  isLoggedin :any;
  localStorageLogIn:any

  ngOnInit(){

    this.isLoggedin= this.loginService.isLoggedin;
    console.log('isLoggedin' + 'app');
    console.log(this.isLoggedin);
    this.localStorageLogIn = localStorage.getItem('isLoggedIn');
    console.log(this.localStorageLogIn);
  }

}
