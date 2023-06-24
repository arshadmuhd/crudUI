import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    private studentServices: StudentServicesTsService,
    private userServices: UserServicesTsService
  ) {}
  user: User[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userServices.getAllusers().subscribe({
      next: (res) => {
        console.log(res);
        // this.student=res;
        this.user = res;
      },
    });
  }


}
