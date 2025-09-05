// student.validation.ts
import { z } from "zod";

export const studentValidationSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  name: z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
  }),
  gender: z.enum(["Male", "Female", "Other"]),
  dateOfBirth: z.string(),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(6, "Contact number is required"),
  emergencyContactNo: z.string().min(6, "Emergency contact number is required"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: z.object({
    fatherName: z.string().min(1, "Father's name is required"),
    fatherOccupation: z.string().min(1, "Father's occupation is required"),
    fatherContactNo: z.string().min(6, "Father's contact number is required"),
    motherName: z.string().min(1, "Mother's name is required"),
    motherOccupation: z.string().optional(),
    motherContactNo: z.string().optional(),
  }),
  localGuardian: z
    .object({
      name: z.string().min(1, "Local guardian name is required"),
      occupation: z.string().optional(),
      contactNo: z.string().min(6, "Local guardian contact number is required"),
      address: z.string().min(1, "Local guardian address is required"),
    })
    .optional(),
  profileImg: z.string().url("Profile image must be a valid URL").optional(),
  isActive: z.enum(["active", "inactive"]).default("active"),
});
