import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetStudent } from 'src/app/Models/getStudent.model';
import { Payment } from 'src/app/Models/payment.model';
import { Student } from 'src/app/Models/student.model';
import { PaymentServicesTsService } from 'src/app/services/payment.services.ts.service';
import { StudentServicesTsService } from 'src/app/services/student.services.ts.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit{
  addPaymentRequest = {} as Payment;
students: GetStudent[] = [];


  constructor(
    private paymentServices: PaymentServicesTsService,
    private studentServices:StudentServicesTsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getStudent();
    
  }

  getStudent(){
  this.studentServices.getAllStudents().subscribe({
    next: (res) => {
      console.log(res);
      // this.student=res;
      this.students = res;
    },
  });
  }

  addPayment(){
    console.log(this.addPaymentRequest);
    this.addPaymentRequest.paidDate=new Date();
    console.log(this.addPaymentRequest.paidDate);
    
    this.paymentServices.getPayment(this.addPaymentRequest.studentId).subscribe({
      next:(res)=>{
        this.addPaymentRequest.id=res.id;
        this.addPaymentRequest.paidAmount=this.addPaymentRequest.paidAmount+res.paidAmount;
        this.paymentServices.updatePayment(this.addPaymentRequest.id,this.addPaymentRequest).subscribe({
        next:(res)=>{
  
            console.log(res);
            this.router.navigate(['payment']);
      
        },error:(err)=>{
          console.log(err);
          
        }
     });
    
      },error:(err)=>{
       this.paymentServices.addPayment(this.addPaymentRequest).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigate(['payment']);
        },error:(err)=>{
          console.log(err);
        }
       })
        
      }
   });

      
  }





}
