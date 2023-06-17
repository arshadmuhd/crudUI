import { Component } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  addUserRequest:User={
    id: "",
    username: "",
    password: "",
    userRole:"",

  }

  addUser(){

  }

}
