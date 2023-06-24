// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Department } from 'src/app/Models/department.model';
// import { DepartmentHead } from 'src/app/Models/departmentHead.model';
// import { Teacher } from 'src/app/Models/teacher.model';
// import { User } from 'src/app/Models/user.model';
// import { DepartmentHeadServicesTsService } from 'src/app/services/department-head.services.ts.service';
// import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
// import { TeacherServicesTsService } from 'src/app/services/teacher.services.ts.service';
// import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

// @Component({
//   selector: 'app-add-department-head',
//   templateUrl: './add-department-head.component.html',
//   styleUrls: ['./add-department-head.component.css'],
// })
// export class AddDepartmentHeadComponent implements OnInit {
//   addDepartmentHeadRequest = {} as DepartmentHead;
//   addTeacherRequest = {} as Teacher;
//   departments = {} as Department[];
//   addUserRequest = {} as User;

//   constructor(
//     private departmentHeadServices: DepartmentHeadServicesTsService,
//     private teacherServices: TeacherServicesTsService,
//     private router: Router,
//     private deparmentService: DepartmentServicesTsService,
//     private userService: UserServicesTsService
//   ) {}

//   ngOnInit(): void {
//     this.getDepartments();
//   }

//   getDepartments() {
//     this.deparmentService.getAllDepartments().subscribe({
//       next: (res) => {
//         this.departments = res;
//         console.log(this.departments, 'this.departments');
//       },
//       error: (err) => {
//         //console.log(err);
//       },
//     });
//   }

//   adduser() {
//     this.addUserRequest.userName = '';
//     this.addUserRequest.userName = this.addDepartmentHeadRequest.teacherEmail;
//     this.addUserRequest.password =
//       this.addDepartmentHeadRequest.teacherPhoneNumber.toString();
//     this.addUserRequest.userRole = 'teacher';
//   }

//   addDepartmentHead() {
//     this.adduser();
//     console.log(this.addUserRequest);

//     //  return
//     this.addTeacherRequest.teacherName =
//       this.addDepartmentHeadRequest.teacherName;
//     this.addTeacherRequest.teacherEmail =
//       this.addDepartmentHeadRequest.teacherEmail;
//     this.addTeacherRequest.teacherPhoneNumber =
//       this.addDepartmentHeadRequest.teacherPhoneNumber;
//     this.addTeacherRequest.teacherPlace =
//       this.addDepartmentHeadRequest.teacherPlace;
//     this.addTeacherRequest.teacherDob =
//       this.addDepartmentHeadRequest.teacherDob;
//     this.addTeacherRequest.teacherDoj =
//       this.addDepartmentHeadRequest.teacherDoj;
//     this.addTeacherRequest.departmentId =
//       this.addDepartmentHeadRequest.departmentId;

//     this.userService.addUsers(this.addUserRequest).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.addDepartmentHeadRequest.userId = res.id;
//         this.addDepartmentHeadRequest.isActive = true;
//         console.log(this.addDepartmentHeadRequest.teacherPhoneNumber);

//         this.addTeacherRequest.userId = res.id;
//         this.addTeacherRequest.isActive = true;



//         this.departmentHeadServices
//               .addDepartmentHead(this.addDepartmentHeadRequest)
//               .subscribe({
//                 next: (res) => {

                  
//                   this.addTeacherRequest.teacherHeadId=res.id
//         this.addTeacherRequest.departmentHeadId=res.id
//         this.teacherServices.addTeacher(this.addTeacherRequest).subscribe({
//           next: (res) => {
            
//                   console.log(res);
//                   this.router.navigate(['departmentHead']);
//                 },
//                 error: (err) => {
//                   console.log(err);
//                 },
//               });
//           },

//           error: (err) => {
//             console.log(err);
//           },
//         });
//       },
//     });
//   }
// }
