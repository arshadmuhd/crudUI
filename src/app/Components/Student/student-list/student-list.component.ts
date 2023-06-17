import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student.model';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentServices:StudentServicesTsService){}

  student:Student[]=[]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.studentServices.getAllStudents().subscribe({
  next:(res)=>{
    console.log(res);
    this.student=res;
    
  }
})
    
  }

}
