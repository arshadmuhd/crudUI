import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserServicesTsService } from 'src/app/services/user.services.ts.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUserRequest = {} as User;

  constructor(
    private userServices: UserServicesTsService,
    private route: ActivatedRoute,
    private rout: Router,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');
        console.log(id+"params")
// debugger;
        if(id!=null){
          this.userServices.getUser(id).subscribe({
            next:(res)=>{
              console.log("res");

              console.log(res);
              this.editUserRequest=res;

            },error:(err)=>{
              console.log(err);
              console.log("2");

            }
          })
        }
        
      }
    })
  }
  updateUser() {
    this.userServices
      .updateUser(
        this.editUserRequest.id,
        this.editUserRequest
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.rout.navigate(['user']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }


}
