import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

formData={};

  constructor(private _http:Http) { }

  /**
   * This function is for saving Employee details
   */
  saveNewCompany(parameter){
    console.log("from company service file");
    
    console.log(parameter);

    return this._http.post('/company/saveNewCompany', parameter).map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data
      } else {
        return false;
      }
    });
  }

  /**
   * This function is for fetching all the company records
   */
   companyDetails(){
     return this._http.get('/company/companyDetails').map(function(data){
       console.log('this is from companyDetails from comanyService file');
       console.log(data);
       let newData = data.json();
       console.log(newData);
       if(newData.success){
         return newData.data;
       }
       
     })
   }

   /**
    * This function is for deleting company details
    */
   deleteCompany(id){
     console.log(id);
     
     return this._http.post('/company/deleteCompany',{params:id}).map(function(data){
      console.log(data);
      let newData = data.json();
      console.log("this is service file ")
       console.log(newData)
       if(newData.success){

        return newData;
       }
      
     })
   }
  /**
    * This function is for updating company details
    */
   updateCompany(updateData){
     return this._http.post('/company/updateCompanyDetails',updateData).map((data)=>{
      console.log('this is from companyUpdate from comanyService file');
      console.log(data);
      let newData = data.json();
      console.log('convert json data')
      console.log(newData);
      if(newData.success){
        return newData;
      }
     })
   }




    setFormData(parameter){
      console.log('this is from setFormData in Companyservice file');
      
        console.log(parameter);
        this.formData = parameter;
   } 
     getFormData(){
       return this.formData;
     }

}