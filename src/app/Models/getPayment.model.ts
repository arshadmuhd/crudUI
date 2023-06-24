import { GetStudent } from "./getStudent.model";

export interface GetPayment {
    id: string;
    studentId: string;
    paidAmount: number;
    paidDate: Date;
    student:GetStudent;


 }
  