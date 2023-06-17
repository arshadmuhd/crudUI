import { Component } from '@angular/core';
import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  addStudentRequest:Student={
    id: "",
    userId: "",
    studentName: "",
    studentDob: new Date(),
    studentDistrict: "",
    studentPlace: "",
    departmentId: "",
    studentStatus: false
  }

  addStudent(){

  }

}
