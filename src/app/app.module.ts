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
import { UserListComponent } from './Components/user/user-list/user-list.component';
import { AddUserComponent } from './Components/user/add-user/add-user.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    StudentListComponent,
    HeaderComponent,
    HomeComponent,

    UserListComponent,
    AddUserComponent,
    AddStudentComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent
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
