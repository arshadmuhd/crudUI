import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentHeadComponent } from './add-department-head.component';

describe('AddDepartmentHeadComponent', () => {
  let component: AddDepartmentHeadComponent;
  let fixture: ComponentFixture<AddDepartmentHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
