import {Injectable, Type} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUpUser} from "../../utilities/signUpUser";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _httpClient:HttpClient){

  }
  profileData !: SignUpUser;
  signUp(userData:SignUpUser){
      let options={
        headers:{'accept': '*/*', 'Content-Type': 'application/json'}
      }
     return this._httpClient.post('https://online-shoppingg.herokuapp.com/user/v1/registration',userData,options);
  }


}
