import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/department.model';
import { GetCourse } from 'src/app/Models/getCourse.model';
import { CourseServicesTsService } from 'src/app/services/course.services.ts.service';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editCourseRequest = {} as GetCourse;
  departments = {} as Department[];
  status:any;


  constructor(
    private courseServices: CourseServicesTsService,
    private route: ActivatedRoute,
    private rout: Router,
    private deparmentService: DepartmentServicesTsService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDepartments();

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);

        if (id != null) {
          this.courseServices.getCourse(id).subscribe({
            next: (res) => {
              // console.log(res);
              this.editCourseRequest = res;
              if(res.courseIsActive==true){
                this.status="true";
              }else{
                this.status="false";

              }
              // this.editStudentRequest.studentDob| Date:'yyyy-MM-d
            },
            error: (err) => {
              console.log(err);
              console.log('2');
            },
          });
        }
      },
    });
  }

  updateCourse() {
    if(this.status=='true'){
      this.editCourseRequest.courseIsActive = true;
    }else{
     this.editCourseRequest.courseIsActive = false;

    }
    this.courseServices
      .updateCourse(this.editCourseRequest.id, this.editCourseRequest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.rout.navigate(['course']);
        },
        error: (err) => {
          console.log(err);
        },
      });
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

}
