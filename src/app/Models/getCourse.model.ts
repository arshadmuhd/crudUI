import { Department } from "./department.model";

export interface GetCourse {
    id: string;
    courseDescription: string;
    courseFee: number;
    department: Department;
    departmentId: string;
    // department:Department;
    courseIsActive: boolean;

  }
  