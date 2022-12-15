import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/loginService/login.service";

export interface DataType {
  token:string;
  email:string;
  username:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : any;
  constructor(private _router:Router,private _loginService :LoginService) {

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    });

  }
  onSubmit(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:DataType)=>{
        console.log('login')
         console.log(data);
         localStorage.setItem('token',data.token);
         localStorage.setItem('name',data.username);
         localStorage.setItem('email',data.email);

        },
      (error)=>{console.log(error),alert('invalid email or password')},
    ()=>{console.log('completed'),this._loginService.menuAppeared() ,this._router.navigate(['/products'])}
    )
  }

}
