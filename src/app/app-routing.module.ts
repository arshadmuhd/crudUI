import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { HomeComponent } from './Components/home/home.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';
import { EditUserComponent } from './Components/User/edit-user/edit-user.component';
import { CourseListComponent } from './Components/Course/course-list/course-list.component';
import { AddCourseComponent } from './Components/Course/add-course/add-course.component';
import { EditCourseComponent } from './Components/Course/edit-course/edit-course.component';
import { PaymentListComponent } from './Components/Payment/payment-list/payment-list.component';
import { AddPaymentComponent } from './Components/Payment/add-payment/add-payment.component';
import { TeacherListComponent } from './Components/Teacher/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './Components/Teacher/add-teacher/add-teacher.component';
// import { DepartmentHeadListComponent } from './Components/department_head/department-head-list/department-head-list.component';
// import { AddDepartmentHeadComponent } from './Components/department_head/add-department-head/add-department-head.component';

const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeesListComponent},
  {path:'employee/add',component:AddEmployeeComponent},
  {path:'employee/edit/:id',component:EditEmployeeComponent},
  

  {path:'user',component:UserListComponent},
  {path:'user/edit/:id',component:EditUserComponent},


  {path:'course',component:CourseListComponent},
  {path:'course/add',component:AddCourseComponent},
  {path:'course/edit/:id',component:EditCourseComponent},


  {path:'payment',component:PaymentListComponent},
  {path:'payment/add',component:AddPaymentComponent},




  // {path:'departmentHead',component:DepartmentHeadListComponent},
  // {path:'departmentHead/add',component:AddDepartmentHeadComponent},



  {path:'teacher',component:TeacherListComponent},
  {path:'teacher/add',component:AddTeacherComponent},
  {path:'teacher/add/:id',component:AddTeacherComponent},


  
  {path:'student',component:StudentListComponent},
  {path:'student/add',component:AddStudentComponent},
  {path:'student/edit/:id',component:EditStudentComponent},


  {path:'department',component:DepartmentListComponent},
  {path:'department/add',component:DepartmentAddComponent},
  {path:'department/edit/:id',component:DepartmentEditComponent},










  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
