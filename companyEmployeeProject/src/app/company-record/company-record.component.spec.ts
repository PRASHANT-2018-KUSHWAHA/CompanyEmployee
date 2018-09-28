import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRecordComponent } from './company-record.component';

describe('CompanyRecordComponent', () => {
  let component: CompanyRecordComponent;
  let fixture: ComponentFixture<CompanyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
