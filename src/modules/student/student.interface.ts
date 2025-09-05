// student.interface.ts
export type TStudent = {
  id: string; // unique student id, e.g. "STU2025001"
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "Male" | "Female" | "Other";
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation?: string;
    motherContactNo?: string;
  };
  localGuardian?: {
    name: string;
    occupation?: string;
    contactNo: string;
    address: string;
  };
  profileImg?: string; // URL or path
  isActive: "active" | "inactive";
};
