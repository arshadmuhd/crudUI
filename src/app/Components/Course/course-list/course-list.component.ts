import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course.model';
import { GetCourse } from 'src/app/Models/getCourse.model';
import { CourseServicesTsService } from 'src/app/services/course.services.ts.service';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  course:GetCourse[]=[]
  constructor(private courseServices:CourseServicesTsService, private route:ActivatedRoute, private rout:Router){}

  ngOnInit(): void {
    this.courseServices.getAllCourses().subscribe({
      next:(res)=>{

        console.log(res);
        this.course=res;
        console.log("run");
        
      
      },error:(res)=>{

        console.log(res);
        console.log("2");

      }
      
    })

      
  }

  deleteBtn(id: string) {
    alert('do ypu wanna delete this');

    if (id != null) {
      this.courseServices.deleteCourse(id).subscribe({
        next: (res) => {
          console.log(id + '34');

          const Findindex = this.course.findIndex((x) => x.id == id);
          if (Findindex !== -1) {
            this.course.splice(Findindex, 1);
          }
        },
        error: (err) => {
          console.log('404');
        },
      });
    }
  }



}
