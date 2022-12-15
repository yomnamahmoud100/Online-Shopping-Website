import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LogInUser} from "../../utilities/logInUser";
import {DataType} from "../../modules/login/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpclient:HttpClient) { }
  isLoggedin : boolean = false;

  login(userData:LogInUser):Observable<DataType>{
    let options={
      headers:{'accept': '*/*' ,'Content-Type': 'application/json'}
    }
     return this._httpclient.post<DataType>('https://online-shoppingg.herokuapp.com/user/v1/login',userData,options);
  }

  menuAppeared():boolean{
    this.isLoggedin = true;
    console.log('service')
    console.log(this.isLoggedin);
    return true;
  }
  menuDisAppeard(){
    this.isLoggedin = false;
  }


}
