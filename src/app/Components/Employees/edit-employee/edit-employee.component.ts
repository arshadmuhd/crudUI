import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeServicesTsService } from 'src/app/services/employee.services.ts.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
 

  constructor(private employeeServices:EmployeeServicesTsService, private route:ActivatedRoute, private rout:Router){}


  editEmployeeRequest:Employee={
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

    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');
        console.log(id);

        if(id!=null){
          this.employeeServices.getEmployee(id).subscribe({
            next:(employee)=>{
              console.log(employee);
              
              this.editEmployeeRequest=employee;

            },error:(err)=>{
              console.log(err);
              console.log("2");

            }
          })
        }
        
      }
    })
    
  }

  updateEmployee(){
    this.employeeServices.updateEmployee(this.editEmployeeRequest.id,this.editEmployeeRequest).subscribe({
      next:(res)=>{
        console.log(res);
          this.rout.navigate(['home']);
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }


}
