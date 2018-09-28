import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 formData={}
  constructor(private _http:Http) { }


    /**
   * This function is for saving Employee details
   */
  saveNewEmployee(parameter){
    console.log("from Employee service file");
    
    console.log(parameter);

    return this._http.post('/employee/saveNewEmployee', parameter).map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data
      } else {
        return false;
      }
    });
  }

 /**
   * This function is for fetching all the employee records
   */
  employeeDetails(){
    return this._http.get('/employee/employeeDetails').map(function(data){
      console.log('this is from employeeDetails from comanyService file');
      console.log(data);
      let newData = data.json();
      console.log(newData);
      if(newData.success){
        return newData.data;
      }
      
    })
  }

  /**
   * This function is for deleting employee details
   */
  deleteEmployee(id){
    console.log(id);
    
    return this._http.post('/employee/deleteEmployee',{params:id}).map(function(data){
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
   * This function is for updating employee details
   */
  updateEmployee(updateData){
    return this._http.post('/employee/updateEmployeeDetails',updateData).map((data)=>{
     console.log('this is from employeeUpdate from comanyService file');
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
     console.log('this is from setFormData in employeeservice file');
     
       console.log(parameter);
       this.formData = parameter;
  } 
    getFormData(){
      return this.formData;
    }

}

