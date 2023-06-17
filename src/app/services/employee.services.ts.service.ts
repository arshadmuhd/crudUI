import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesTsService {
  // baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  i=1;
//get
  getAllEmployees():Observable<Employee[]>{
   return this.http.get<Employee[]>('https://localhost:7083/api/Employee');

  }
//add
  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>('https://localhost:7083/api/Employee',addEmployeeRequest);
  }


//get
  getEmployee(id:string):Observable<Employee>{
    
   var emp= this.http.get<Employee>('https://localhost:7083/api/Employee/'+id)
   console.log(emp);
   return emp
   

  }

  updateEmployee(id:string,editEmployeeRequest:Employee):Observable<Employee>{
    console.log(id+" 2334");

    console.log(editEmployeeRequest+" 2334");
    
   return this.http.put<Employee>('https://localhost:7083/api/Employee/'+id,editEmployeeRequest)
  }


  deleteEmployee(id:string):Observable<Employee>{

    console.log(id+ " ret");
    
    
    return this.http.delete<Employee>('https://localhost:7083/api/Employee/'+id);
    
  
    
 
   }


}
