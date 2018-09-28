import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.css']
})
export class EmployeeRecordComponent implements OnInit {

  employeeList =[];
  constructor(private _serviceFile:EmployeeService,private _router:Router) { }


  addEmployee(){
    this._router.navigateByUrl('employee');
  }
 
  updateEmployee(employee){
    console.log(employee);
    this._serviceFile.setFormData(employee);
    this._router.navigateByUrl('employeeUpdate')
    
   }
   
   deleteEmployee(i,employee){
     var id = employee._id;
     this._serviceFile.deleteEmployee(id).subscribe((data)=>{
      console.log('this is from deleteemployee from employee-record Component file');
       
      console.log(data);
      if(data.success){
        console.log(i);
        
        this.employeeList.splice(i,1);
      }
     })
   }
  ngOnInit() {

    this._serviceFile.employeeDetails().subscribe((data)=>{
       if(data && data.length>0){
        console.log('data in component')
        console.log(data)
        this.employeeList = data;
       }
    })
  }

}
