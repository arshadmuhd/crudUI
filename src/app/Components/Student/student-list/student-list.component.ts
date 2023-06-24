import { Component, OnInit } from '@angular/core';
import { GetStudent } from 'src/app/Models/getStudent.model';
import { Student } from 'src/app/Models/student.model';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(
    private studentServices: StudentServicesTsService,
    private userServices: UserServicesTsService
  ) {}

  student: Student[] = [];
  getStudent: GetStudent[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.studentServices.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        // this.student=res;
        this.getStudent = res;
      },
    });
  }

  deleteBtn(id: string) {
    alert('do you wanna delete this');

    if (id != null) {
      this.userServices.deleteUser(id).subscribe({
        next: (res) => {
          console.log(id + '34');

          const Findindex = this.getStudent.findIndex(x=> x.userId == id);
          if (Findindex !== -1) {
            this.getStudent.splice(Findindex, 1);
          }
        },
        error: (err) => {
          console.log('404');
        },
      });
    }
  }
}
