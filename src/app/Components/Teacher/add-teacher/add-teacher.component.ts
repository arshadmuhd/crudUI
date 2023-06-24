import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { Teacher } from 'src/app/Models/teacher.model';
import { User } from 'src/app/Models/user.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { TeacherServicesTsService } from 'src/app/services/teacher.services.ts.service';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent implements OnInit {
  addTeacherRequest = {} as Teacher;
  editTeacherRequest = {} as Teacher;
  departments = {} as Department[];
  addUserRequest = {} as User;
  id: any;
  status: any;

  constructor(
    private teacherServices: TeacherServicesTsService,
    private route: ActivatedRoute,
    private rout: Router,
    private deparmentService: DepartmentServicesTsService,
    private userService: UserServicesTsService
  ) {}

  ngOnInit(): void {
    this.getDepartments();

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        this.id = id;
        console.log(id);

        if (id != null) {
          this.teacherServices.getTeacher(id).subscribe({
            next: (res) => {
              // console.log(res);
              this.addTeacherRequest = res;
              // debugger;
              if (res.isActive === true) {
                this.status = 'true';
              } else {
                this.status = 'false';
              }
              // this.editStudentRequest.studentDob| Date:'yyyy-MM-d
            },
            error: (errr) => {
              console.log(errr);
            },
          });
        }
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

  adduser() {
    this.addUserRequest.userName = '';
    this.addUserRequest.userName = this.addTeacherRequest.teacherEmail;
    this.addUserRequest.password =
      this.addTeacherRequest.teacherPhoneNumber.toString();
    this.addUserRequest.userRole = 'teacher';
  }

  submitForm() {
    // debugger;
    if (this.id != null) {
      this.updateTeacher();
    } else {
      this.addTeacher();
    }
  }

  addTeacher() {
    this.adduser();
    console.log(this.addUserRequest);
    //  return

    this.userService.addUsers(this.addUserRequest).subscribe({
      next: (res) => {
        console.log(res);
        this.addTeacherRequest.userId = res.id;
        if (this.status == 'true') {
          this.addTeacherRequest.isActive = true;
        } else {
          this.addTeacherRequest.isActive = false;
        }
        // this.addTeacherRequest.isActive = true;
        console.log(this.addTeacherRequest.teacherPhoneNumber);
        this.teacherServices.addTeacher(this.addTeacherRequest).subscribe({
          next: (res) => {
            console.log(res);
            this.rout.navigate(['teacher']);
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

  updateTeacher() {
    if (this.status == 'true') {
      this.addTeacherRequest.isActive = true;
    } else {
      this.addTeacherRequest.isActive = false;
    }
    // debugger;
    this.teacherServices
      .updateTeacher(this.addTeacherRequest.id, this.addTeacherRequest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.rout.navigate(['teacher']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
