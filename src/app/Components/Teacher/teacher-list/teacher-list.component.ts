import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department.model';
import { GetTeacher } from 'src/app/Models/getTeacher.model';
import { Teacher } from 'src/app/Models/teacher.model';
import { DepartmentServicesTsService } from 'src/app/services/department.services.ts.service';
import { TeacherServicesTsService } from 'src/app/services/teacher.services.ts.service';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
})
export class TeacherListComponent implements OnInit {
  teacher: Teacher[] = [];
  DupTeacher: GetTeacher[] = [];
  getTeacher: GetTeacher[] = [];
  arr: any = [];

  constructor(
    private teacherServices: TeacherServicesTsService,
    private userServices: UserServicesTsService,
    private departmentServices: DepartmentServicesTsService
  ) {}

  ngOnInit(): void {
    this.teacherServices.getAllTeachers().subscribe({
      next: (res) => {
        console.log(res);
        this.getTeacher = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
