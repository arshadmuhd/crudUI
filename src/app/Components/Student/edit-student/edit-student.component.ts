import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { GetStudent } from 'src/app/Models/getStudent.model';
import { Student } from 'src/app/Models/student.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { EmployeeServicesTsService } from 'src/app/services/employee.services.ts.service';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  editStudentRequest = {} as GetStudent;
  departments = {} as Department[];
status:any;

  constructor(
    private studentServices: StudentServicesTsService,
    private route: ActivatedRoute,
    private rout: Router,
    private deparmentService: DepartmentServicesTsService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDepartments();

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);

        if (id != null) {
          this.studentServices.geStudents(id).subscribe({
            next: (res) => {
              // console.log(res);
              this.editStudentRequest = res;
              // this.editStudentRequest = res;
              // debugger;
              if(res.studentIsActive==true){
                this.status="true";
              }else{
                this.status="false";

              }
              // this.editStudentRequest.studentDob| Date:'yyyy-MM-d
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

  updateStudent() {
    debugger;
    if(this.status=='true'){
      this.editStudentRequest.studentIsActive = true;
    }else{
     this.editStudentRequest.studentIsActive = false;

    }
    this.studentServices
      .updateStudent(this.editStudentRequest.id, this.editStudentRequest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.rout.navigate(['student']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getDepartments() {
    this.deparmentService.getAllDepartments().subscribe({
      next: (res) => {
        this.departments = res;
        console.log(this.departments, 'this.departments');
      },
      error: (err) => {
        //console.log(err);
      },
    });
  }
}
