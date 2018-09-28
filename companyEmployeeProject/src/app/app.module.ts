import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import {CompanyService} from './company.service';
import { CompanyRecordComponent } from './company-record/company-record.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRecordComponent } from './employee-record/employee-record.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component'


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    CompanyRecordComponent,
    CompanyUpdateComponent,
    EmployeeComponent,
    EmployeeRecordComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
