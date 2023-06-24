import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Models/teacher.model';
import { Observable } from 'rxjs';
import { GetTeacher } from '../Models/getTeacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherServicesTsService {

  constructor(private http: HttpClient) {}


getAllTeachers(): Observable<GetTeacher[]> {
    return this.http.get<GetTeacher[]>('https://localhost:7083/api/Teacher');
  }
  // add
  addTeacher(addTeacherRequest: Teacher): Observable<Teacher> {
    addTeacherRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Teacher>(
      'https://localhost:7083/api/Teacher',
      addTeacherRequest
    );
  }
// get

getTeacher(id: string): Observable<GetTeacher> {
  // debugger;
  var teacher = this.http.get<GetTeacher>(
    'https://localhost:7083/api/Teacher/' + id
  );
  console.log(teacher);
  return teacher;
}

updateTeacher(id: string, addTeacherRequest: Teacher): Observable<Teacher> {
  console.log(addTeacherRequest);
  console.log("2334");
  
// debugger;
  console.log(addTeacherRequest + ' 2334');

  return this.http.put<Teacher>(
    'https://localhost:7083/api/Teacher/' + id,
    addTeacherRequest
  );
}

}
