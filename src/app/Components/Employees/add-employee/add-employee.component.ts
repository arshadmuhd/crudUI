import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeServicesTsService } from 'src/app/services/employee.services.ts.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
 

  constructor(private employeeServices:EmployeeServicesTsService, private router:Router){}

  addEmployeeRequest:Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''


  }
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
 }
  addEmployee(){
      this.employeeServices.addEmployee(this.addEmployeeRequest).subscribe({
      next:(employee)=>{
          console.log(employee);
          this.router.navigate(['employee']);
    
      },error:(err)=>{
        console.log(err);
        
      }
   });

      
  }

}
