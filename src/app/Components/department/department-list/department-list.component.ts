import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  department: Department[] = [];
  constructor(
    private departmentServices: DepartmentServicesTsService,
    private route: ActivatedRoute,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.departmentServices.getAllDepartments().subscribe({
      next: (res) => {
        console.log(res);
        this.department = res;
        console.log('1');
        
      },
      error: (res) => {
        console.log(res);
        console.log('2');
      },
    });
  }
  deleteBtn(id: string) {
    alert('do ypu wanna delete this');

    if (id != null) {
      this.departmentServices.deleteDepartment(id).subscribe({
        next: (res) => {
          console.log(id + '34');

          const Findindex = this.department.findIndex((x) => x.id == id);
          if (Findindex !== -1) {
            this.department.splice(Findindex, 1);
          }
        },
        error: (err) => {
          console.log('404');
        },
      });
    }
  }
}

// deleteBtn(id:string){

// }
