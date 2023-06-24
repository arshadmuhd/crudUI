import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadListComponent } from './department-head-list.component';

describe('DepartmentHeadListComponent', () => {
  let component: DepartmentHeadListComponent;
  let fixture: ComponentFixture<DepartmentHeadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentHeadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentHeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
