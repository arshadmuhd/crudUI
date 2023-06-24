import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../Models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServicesTsService {

  constructor(private http:HttpClient) { }

  getAllDepartments():Observable<Department[]>{
    return this.http.get<Department[]>('https://localhost:7083/api/Department');
 
   }

   addDepartment(addDepartmentRequest:Department):Observable<Department>{
    console.log(addDepartmentRequest);
   
    addDepartmentRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Department>('https://localhost:7083/api/Department',addDepartmentRequest);
  }

  getDepartment(id:string):Observable<Department>{
// debugger;
    return this.http.get<Department>('https://localhost:7083/api/Department/'+id)
 
   }
 
   updateDepartment(id:string,editDepartmentRequest:Department):Observable<Department>{
     console.log(id+" 2334");
 
     console.log(editDepartmentRequest+" 2334");
     
    return this.http.put<Department>('https://localhost:7083/api/Department/'+id,editDepartmentRequest)
   }


   deleteDepartment(id:string):Observable<Department>{
    console.log(id+ " ret"); 
    return this.http.delete<Department>('https://localhost:7083/api/Department/'+id);
    
   }



}
