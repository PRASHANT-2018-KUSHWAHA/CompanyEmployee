import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from './app.component';


/**
 * custom modules
 */
import {CompanyComponent} from './company/company.component';
import {HomeComponent} from './home/home.component';
import {CompanyRecordComponent} from './company-record/company-record.component';
import {CompanyUpdateComponent} from './company-update/company-update.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeRecordComponent} from './employee-record/employee-record.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';

const routes: Routes= [
  {path:'',component:HomeComponent},
  {path:'company',component:CompanyComponent},
  {path:'companyDetails',component:CompanyRecordComponent},
  {path:'companyUpdate',component:CompanyUpdateComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeeDetails',component:EmployeeRecordComponent},
  {path:'employeeUpdate',component:EmployeeUpdateComponent},
];

@NgModule({
  imports:[
   CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports:[
       RouterModule
  ],
  
})

export class AppRoutingModule { }