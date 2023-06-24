import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentHead } from '../Models/departmentHead.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentHeadServicesTsService {

  constructor(private http:HttpClient) { }

  getAlldepartmentHeads():Observable<DepartmentHead[]>{
    return this.http.get<DepartmentHead[]>('https://localhost:7083/api/DepartmentHead');
 
   }

   addDepartmentHead(addDepartmentRequest:DepartmentHead):Observable<DepartmentHead>{
    addDepartmentRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<DepartmentHead>('https://localhost:7083/api/DepartmentHead',addDepartmentRequest);
  }
}
