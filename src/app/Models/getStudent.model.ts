import { Department } from "./department.model";
import { User } from "./user.model";

export interface GetStudent {
    id: string;
    userId: string;
    user: User;
    studentName: string;
    phoneNumber:number;
    studentEmail:string;
    studentDob: Date;
    studentDistrict: string;
    studentPlace: string;
    department: Department;
    departmentId:string;
    studentIsActive: boolean
  }