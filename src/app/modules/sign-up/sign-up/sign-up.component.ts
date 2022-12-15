import { Component, OnInit } from '@angular/core';
import {SignupService} from "../../../services/signUp/signup.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpUser} from "../../../utilities/signUpUser";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: any;
  wrongCredintials: boolean =false;

   userData: any;

  constructor(private _signUpService : SignupService ,private _router :Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name:  new FormControl('',Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    });

  }

  onSubmit() {

    this._signUpService.signUp(this.signUpForm.value).subscribe(
      (result)=>{console.log(result)},(error)=>{console.log(error),alert('this account is already taken before')},()=>{console.log('completed'),this._router.navigate(['/login'])});
    localStorage.setItem('name',this.signUpForm.value.name);
    localStorage.setItem('email',this.signUpForm.value.email);

  }

}
