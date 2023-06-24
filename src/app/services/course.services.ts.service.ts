import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/course.model';
import { Observable } from 'rxjs';
import { GetCourse } from '../Models/getCourse.model';

@Injectable({
  providedIn: 'root'
})
export class CourseServicesTsService {

  constructor(private http:HttpClient) { }


  getAllCourses():Observable<GetCourse[]>{

    return this.http.get<GetCourse[]>('https://localhost:7083/api/Course');
 
   }

   addCourse(addCourseRequest:Course):Observable<Course>{
    // debugger;
    addCourseRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Course>('https://localhost:7083/api/Course',addCourseRequest);
  }


  getCourse(id: string): Observable<GetCourse> {
    var emp = this.http.get<GetCourse>(
      'https://localhost:7083/api/Course/' + id
    );
    console.log(emp);
    return emp;
  }

  updateCourse(id: string, editCourseRequest: Course): Observable<Course> {
    console.log(id + ' 2334');

    console.log(editCourseRequest + ' 2334');

    return this.http.put<Course>(
      'https://localhost:7083/api/Course/' + id,
      editCourseRequest
    );
  }

  deleteCourse(id: string): Observable<GetCourse> {
    console.log(id + ' ret');

    return this.http.delete<GetCourse>(
      'https://localhost:7083/api/Course/' + id
    );
  }
}
