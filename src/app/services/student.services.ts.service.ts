import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { Student } from '../Models/student.model';
import { GetStudent } from '../Models/getStudent.model';

@Injectable({
  providedIn: 'root',
})
export class StudentServicesTsService {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<GetStudent[]> {
    return this.http.get<GetStudent[]>('https://localhost:7083/api/Student');
  }

  //add
  addStudents(addStudentRequest: Student): Observable<Student> {
    // debugger;
    console.log(addStudentRequest);

    // addStudentRequest.studentDob = new Date(addStudentRequest.studentDob);
    addStudentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Student>(
      'https://localhost:7083/api/Student',
      addStudentRequest
    );
  }

  // get
  geStudents(id: string): Observable<GetStudent> {
    var emp = this.http.get<GetStudent>(
      'https://localhost:7083/api/Student/' + id
    );
    console.log(emp);
    return emp;
  }

  updateStudent(id: string, editStudentRequest: Student): Observable<Student> {
    console.log(id + ' 2334');

    console.log(editStudentRequest + ' 2334');

    return this.http.put<Student>(
      'https://localhost:7083/api/Student/' + id,
      editStudentRequest
    );
  }

  deleteStudent(id: string): Observable<GetStudent> {
    console.log(id + ' ret');

    return this.http.delete<GetStudent>(
      'https://localhost:7083/api/Employee/' + id
    );
  }
}
