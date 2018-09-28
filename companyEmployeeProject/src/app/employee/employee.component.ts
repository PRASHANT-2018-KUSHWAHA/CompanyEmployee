import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formData = {};

  constructor(private _employeeService : EmployeeService, private _router:Router) { }

  saveEmployee(){
    console.log('this is fromData');
    console.log(this.formData);
    
    this._employeeService.saveNewEmployee(this.formData).subscribe(function(data){
      console.log(data);
    
      alert("Company Saved  :)");
    })
  }
  ngOnInit() {
  }

}
