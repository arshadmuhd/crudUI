import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { Teacher } from 'src/app/Models/teacher.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { TeacherServicesTsService } from 'src/app/services/teacher.services.ts.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
  constructor(
    private departmentServices: DepartmentServicesTsService,
    private route: ActivatedRoute,
    private router: Router,private teacherServices:TeacherServicesTsService
  ) {}

  editDepartmentRequest: Department = {
    id: '',
    departmentName: '',
    departmentHeadName:"",
    departmentStatus: true,
  };

  teachers = {} as Teacher[];
status:any

  ngOnInit(): void {
    this.getTeachers();
    
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id + 'params');
        // debugger;
        if (id != null) {
          this.departmentServices.getDepartment(id).subscribe({
            next: (res) => {
              console.log(res);
              this.editDepartmentRequest = res;
              if(res.departmentStatus==true){
                this.status="true";
              }else{
                this.status="false";

              }
            },
            error: (err) => {
              console.log(err);
              console.log('2');
            },
          });
        }
      },
    });
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


  updateDepartment() {
    if(this.status=='true'){
      this.editDepartmentRequest.departmentStatus = true;
    }else{
     this.editDepartmentRequest.departmentStatus = false;

    }
    this.departmentServices
      .updateDepartment(
        this.editDepartmentRequest.id,
        this.editDepartmentRequest
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['department']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
