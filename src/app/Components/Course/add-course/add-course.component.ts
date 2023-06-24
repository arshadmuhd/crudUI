import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/course.model';
import { Department } from 'src/app/Models/department.model';
import { CourseServicesTsService } from 'src/app/services/course.services.ts.service';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseRequest = {} as Course;
  departments = {} as Department[];
status:any
  constructor(
    private courseServices: CourseServicesTsService,
    private router: Router,
    private deparmentService: DepartmentServicesTsService,
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.deparmentService.getAllDepartments().subscribe({
      next: (res) => {
        this.departments = res;
        console.log(this.departments, 'this.departments');
      },
      error: (err) => {
        //console.log(err);
      },
    });
  }

  addCourse(){
    if(this.status=='true'){
      this.addCourseRequest.courseIsActive = true;
    }else{
     this.addCourseRequest.courseIsActive = false;

    }

    console.log(this.addCourseRequest);
    this.courseServices.addCourse(this.addCourseRequest).subscribe({
      next:(res)=>{
console.log("1");

          console.log(res);
        
          this.router.navigate(['course']);
    
      },error:(err)=>{
        console.log(err);
        
      }
   });

      
  }

}
