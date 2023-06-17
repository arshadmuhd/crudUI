import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  constructor(private departmentServices:DepartmentServicesTsService, private route:ActivatedRoute, private router:Router){}

  

  editDepartmentRequest:Department={
    id: "",
    departmentName: "",
    departmentStatus: true
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');
        console.log(id+"params")
debugger;
        if(id!=null){
          this.departmentServices.getDepartment(id).subscribe({
            next:(res)=>{
              console.log(res);
              this.editDepartmentRequest=res;

            },error:(err)=>{
              console.log(err);
              console.log("2");

            }
          })
        }
        
      }
    })
  }

  updateDepartment(){
    this.departmentServices.updateDepartment(this.editDepartmentRequest.id,this.editDepartmentRequest).subscribe({
      next:(res)=>{
        console.log(res);
          this.router.navigate(['department']);
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }





}
