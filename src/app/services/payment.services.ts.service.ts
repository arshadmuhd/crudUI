import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../Models/payment.model';
import { Observable } from 'rxjs';
import { GetPayment } from '../Models/getPayment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentServicesTsService {

  constructor(private http: HttpClient) {}


  getAllPayments(): Observable<GetPayment[]> {
    return this.http.get<GetPayment[]>('https://localhost:7083/api/Payment');
  }

  addPayment(addPaymentRequest: Payment): Observable<Payment> {
    // debugger;
    console.log(addPaymentRequest);

    // addStudentRequest.studentDob = new Date(addStudentRequest.studentDob);
    addPaymentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Payment>(
      'https://localhost:7083/api/Payment',
      addPaymentRequest
    );
  }


   // get
   getPayment(id: string): Observable<GetPayment> {
    var emp = this.http.get<GetPayment>(
      'https://localhost:7083/api/Payment/' + id
    );
    console.log(emp);
    return emp;
  }

  updatePayment(id: string, addPaymentRequest: Payment): Observable<Payment> {
    console.log(id );

    console.log(addPaymentRequest);

    return this.http.put<Payment>(
      'https://localhost:7083/api/Payment/' + id,
      addPaymentRequest
    );
  }

  
}
