import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  
  formData = {};
  constructor( private _companyService : CompanyService, private _router:Router) { }

  updateCompany(){

    console.log(this.formData);
    
    this._companyService.updateCompany(this.formData).subscribe((data)=>{
      console.log(data);
      if(data){
        this._router.navigateByUrl('companyDetails');
        
      }
    })

  }

  ngOnInit() {
    this.formData = this._companyService.getFormData();
    console.log("this is company-update component");
    
    console.log(this.formData);
  }

}
