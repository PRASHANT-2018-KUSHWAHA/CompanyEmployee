import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';

import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  formData = {};

  constructor(private _companyService : CompanyService,  private _router: Router) { }

  saveCompany(){
    console.log('this is fromData');
    console.log(this.formData);
    
    this._companyService.saveNewCompany(this.formData).subscribe((data)=>{
      if(data){
      console.log(data);
      this._router.navigateByUrl('companyDetails'); 
      alert("Company Saved  :)");
      }else{
        console.log('data on success false component');
        console.log(data);
        alert(data.MSG);
      }
    })
  
  }


  ngOnInit() {
  }

}
