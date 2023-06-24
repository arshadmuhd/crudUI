import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { Student } from 'src/app/Models/student.model';
import { User } from 'src/app/Models/user.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudentRequest = {} as Student;
  departments = {} as Department[];
  addUserRequest = {} as User;
  status:any;

  constructor(
    private studentServices: StudentServicesTsService,
    private router: Router,
    private deparmentService: DepartmentServicesTsService,
    private userService: UserServicesTsService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
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

  adduser() {
    this.addUserRequest.userName = '';
    this.addUserRequest.userName = this.addStudentRequest.studentEmail;
    this.addUserRequest.password =
      this.addStudentRequest.phoneNumber.toString();
    this.addUserRequest.userRole = 'student';
  }

  addStudent() {
    this.adduser();
    console.log(this.addUserRequest);
    //  return

    this.userService.addUsers(this.addUserRequest).subscribe({
      next: (res) => {
        console.log(res);
        this.addStudentRequest.userId = res.id;
  
       
        if(this.status=='true'){
          this.addStudentRequest.studentIsActive = true;
        }else{
         this.addStudentRequest.studentIsActive = false;

        }
        // this.addStudentRequest.studentIsActive = false;
        console.log(this.addStudentRequest.phoneNumber);
        this.studentServices.addStudents(this.addStudentRequest).subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['student']);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });

    //     this.userService.addStudents(this.addStudentRequest).subscribe({
    //     next:(res)=>{
    //         console.log(res);
    //         this.router.navigate(['student']);

    //     },error:(err)=>{
    //       console.log(err);

    //     }
    //  });
  }
}
