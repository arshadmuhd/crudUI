import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {

  constructor(private departmentServices:DepartmentServicesTsService, private router:Router){}

  addDepartmentRequest:Department={
    id: "",
    departmentName: "",
    departmentStatus: true

  }

  addDepartment(){
    this.departmentServices.addDepartment(this.addDepartmentRequest).subscribe({
      next:(department)=>{
          console.log(department);
          this.router.navigate(['department']);
    
      },error:(err)=>{
        console.log(err);
        
      }
   });

      
  }

  }