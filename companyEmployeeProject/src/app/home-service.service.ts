import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


  constructor(private _http:Http) { }

/**
 * This function is for checking complete  record of company and employee
 */

  fetchTheRecord(){
   return this._http.get('/home/fetchCompleteRecord').map(function(data){
       console.log('data is in home-service file');
       console.log(data);
       var newData = data.json();
       console.log(newData);
       if(newData.success){
         return newData.data;
       }     
   })
  }
}
