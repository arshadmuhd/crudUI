import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { Student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesTsService {

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>('https://localhost:7083/api/Student')
  }

}
