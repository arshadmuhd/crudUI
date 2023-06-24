import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentHead } from 'src/app/Models/departmentHead.model';
import { DepartmentHeadServicesTsService } from 'src/app/services/department-head.services.ts.service';

@Component({
  selector: 'app-department-head-list',
  templateUrl: './department-head-list.component.html',
  styleUrls: ['./department-head-list.component.css']
})
export class DepartmentHeadListComponent implements OnInit {
  departmentHead:DepartmentHead[]=[]
  constructor(private departmentHeadServices:DepartmentHeadServicesTsService, private route:ActivatedRoute, private rout:Router){}

  ngOnInit(): void {
    this.departmentHeadServices.getAlldepartmentHeads().subscribe({
      next:(res)=>{

        console.log(res);
        this.departmentHead=res;
        console.log("run");
        
      
      },error:(res)=>{

        console.log(res);
        console.log("2");

      }
      
    })

      
  }

  
  
}
