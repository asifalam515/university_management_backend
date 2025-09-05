// student.model.ts
import { Schema, model } from "mongoose";
import { TStudent } from "./student.interface";
import { string } from "zod";

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true, unique: true },
    name: {
      firstName: { type: String, required: true },
      middleName: string,
      lastName: { type: String, required: true },
    },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String },
      motherContactNo: { type: String },
    },
    localGuardian: {
      name: { type: String },
      occupation: { type: String },
      contactNo: { type: String },
      address: { type: String },
    },
    profileImg: { type: String },
    isActive: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const StudentModel = model<TStudent>("Student", studentSchema);
