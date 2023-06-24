import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';

import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { EditUserComponent } from './Components/User/edit-user/edit-user.component';
import { CourseListComponent } from './Components/Course/course-list/course-list.component';
import { AddCourseComponent } from './Components/Course/add-course/add-course.component';
import { EditCourseComponent } from './Components/Course/edit-course/edit-course.component';
import { PaymentListComponent } from './Components/Payment/payment-list/payment-list.component';
import { EditPaymentComponent } from './Components/Payment/edit-payment/edit-payment.component';
import { AddPaymentComponent } from './Components/Payment/add-payment/add-payment.component';
import { DepartmentHeadListComponent } from './Components/department_head/department-head-list/department-head-list.component';
import { TeacherListComponent } from './Components/Teacher/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './Components/Teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './Components/Teacher/edit-teacher/edit-teacher.component';
// import { AddDepartmentHeadComponent } from './Components/department_head/add-department-head/add-department-head.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    StudentListComponent,
    HeaderComponent,
    HomeComponent,

    AddStudentComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    EditStudentComponent,
    UserListComponent,
    EditUserComponent,
    CourseListComponent,
    AddCourseComponent,
    EditCourseComponent,
    PaymentListComponent,
    EditPaymentComponent,
    AddPaymentComponent,
    DepartmentHeadListComponent,
    TeacherListComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    // AddDepartmentHeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
