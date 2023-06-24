import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServicesTsService {
  constructor(private http: HttpClient) {}

  i = 1;
  //get
  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7083/api/User');
  }
  // add
  addUsers(addUserRequest: User): Observable<User> {
    addUserRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(
      'https://localhost:7083/api/User',
      addUserRequest
    );
  }

  // get
  getUser(id:string):Observable<User>{

   var user= this.http.get<User>('https://localhost:7083/api/User/'+id);
// debugger;
   console.log(user);
   return user

  }

  updateUser(id:string,editUserRequest:User):Observable<User>{
    console.log(id+" 2334");

    console.log(editUserRequest+" 2334");

   return this.http.put<User>('https://localhost:7083/api/User/'+id,editUserRequest)
  }

  deleteUser(id: string): Observable<User> {
    console.log(id + ' ret');

    return this.http.delete<User>('https://localhost:7083/api/User/' + id);
  }
}
