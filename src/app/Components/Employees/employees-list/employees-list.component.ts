import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeServicesTsService } from 'src/app/services/employee.services.ts.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee:Employee[]=[]

  
  constructor(private employeeServices:EmployeeServicesTsService, private route:ActivatedRoute, private rout:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.employeeServices.getAllEmployees().subscribe({
      next:(employee)=>{
        console.log(employee);
        this.employee=employee;
        console.log("1");
        
      
      },error:(response)=>{

        console.log(response);
        console.log("2");

      }
      
    })



    //////delete




  }

  deleteBtn(id:string){
    alert("do ypu wanna delete this");
   
        if(id!=null){
          
          this.employeeServices.deleteEmployee(id).subscribe({
            
            next:(res)=>{
            console.log(id+"34");
        
            const Findindex=this.employee.findIndex(x=>x.id==id);
            if(Findindex!== -1){
              this.employee.splice(Findindex,1);

            }
           

            },error:(err)=>{
            console.log("404")

            }
          })
        
        }
  
      }
    

}
