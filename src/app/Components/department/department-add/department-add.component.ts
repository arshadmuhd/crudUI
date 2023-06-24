import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { Teacher } from 'src/app/Models/teacher.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { TeacherServicesTsService } from 'src/app/services/teacher.services.ts.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit{

  constructor(private departmentServices:DepartmentServicesTsService, private router:Router,private teacherServices:TeacherServicesTsService){}

  addDepartmentRequest={} as Department;

  teachers = {} as Teacher[];
status:any;
  ngOnInit(): void {
    this.getTeachers();
    
  }

  getTeachers(){
    this.teacherServices.getAllTeachers().subscribe({
      next: (res) => {
        console.log(res);
        this.teachers = res;
        console.log('1');
        
      },
      error: (res) => {
        console.log(res);
        console.log('2');
      },
    });

  }


  addDepartment(){
    console.log(this.addDepartmentRequest);
    console.log(this.addDepartmentRequest.departmentStatus);
    
    if(this.status=='true'){
      this.addDepartmentRequest.departmentStatus = true;
    }else{
     this.addDepartmentRequest.departmentStatus = false;

    }
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