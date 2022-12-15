import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDetails} from "../../utilities/productDetails";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpclient:HttpClient) {

  }

 getProducts():Observable<any>{
   let options={
     headers:{
       'Authorization': 'Bearer ' + localStorage.getItem('token'),
       'accept': '*/*',

     },
   }
      console.log(options);
      return this._httpclient.get('https://online-shoppingg.herokuapp.com/product/v1/get',options);
  }


}
