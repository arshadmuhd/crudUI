import { Department } from "./department.model";
import { User } from "./user.model";

export interface Student {
    id: string;
    userId: string;
    // user: User;
    studentName: string;
    phoneNumber:number;
    studentEmail:string;
    studentDob: Date;
    studentDistrict: string;
    studentPlace: string;
    departmentId:string;
    // department: Department;
    studentIsActive: Boolean
  }
  