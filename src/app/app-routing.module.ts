import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { HomeComponent } from './Components/home/home.component';
import { AddUserComponent } from './Components/user/add-user/add-user.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';

const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeesListComponent},
  {path:'employee/add',component:AddEmployeeComponent},
  {path:'employee/edit/:id',component:EditEmployeeComponent},
  

  {path:'user/add',component:AddUserComponent},

  
  {path:'student',component:StudentListComponent},
  {path:'student/add',component:AddStudentComponent},

  {path:'department',component:DepartmentListComponent},
  {path:'department/add',component:DepartmentAddComponent},
  {path:'department/edit/:id',component:DepartmentEditComponent},










  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
