import { Component } from '@angular/core';
import { GetPayment } from 'src/app/Models/getPayment.model';
import { GetStudent } from 'src/app/Models/getStudent.model';
import { Payment } from 'src/app/Models/payment.model';
import { Student } from 'src/app/Models/student.model';
import { PaymentServicesTsService } from 'src/app/services/payment.services.ts.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent {
  payment:GetPayment[]=[]
  student: Student[] = [];
  getStudent: GetStudent[] = [];


  constructor(
    private paymentServices: PaymentServicesTsService,
  ) {}

  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.paymentServices.getAllPayments().subscribe({
      next: (res) => {
        console.log(res);
        // this.student=res;
        this.payment = res;
        // this.balanceFee=res.paidAmount
      },
    });
  }

  // deleteBtn(id: string) {
  //   alert('do you wanna delete this');

  //   if (id != null) {
  //     this.userServices.deleteUser(id).subscribe({
  //       next: (res) => {
  //         console.log(id + '34');

  //         const Findindex = this.getStudent.findIndex(x=> x.userId == id);
  //         if (Findindex !== -1) {
  //           this.getStudent.splice(Findindex, 1);
  //         }
  //       },
  //       error: (err) => {
  //         console.log('404');
  //       },
  //     });
  //   }
  // }

 
}
