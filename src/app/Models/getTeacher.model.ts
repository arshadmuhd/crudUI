import { Department } from "./department.model";

export interface GetTeacher {
    id: string;
    userId: string;
    teacherName: string;
    teacherDob: Date;
    teacherEmail:string;
    teacherPhoneNumber:number;
    teacherDoj: Date;
    teacherPlace: string;
    departmentId: string;
    department: Department;
    isActive: boolean;
  }
  