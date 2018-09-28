import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  formData = {};
  constructor( private _employeeService : EmployeeService, private _router:Router) { }

  updateEmployee(){

    console.log(this.formData);
    
    this._employeeService.updateEmployee(this.formData).subscribe((data)=>{
      console.log(data);
      if(data){
        this._router.navigateByUrl('employeeDetails');
        
      }
    })

  }

  ngOnInit() {
    this.formData = this._employeeService.getFormData();
    console.log("this is company-update component");
    
    console.log(this.formData);
  }

}
