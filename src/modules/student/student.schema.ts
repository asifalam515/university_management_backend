// student.model.ts
import { Schema, model } from "mongoose";
import { studentModelType, TStudent, TStudentModel } from "./student.interface";
import { string } from "zod";
import bcrypt from "bcrypt";
import config from "../../config";

const studentSchema = new Schema<TStudent, studentModelType>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
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
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
// pre save middleware
//hasing password and save into DB
studentSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcyrpt_salt_rounds)
  );
  next();
});

//post save middleware
//prevent showing password from DB
studentSchema.post("save", function (doc, next) {
  //after the saving .we will get updated doc. now we are going to make it empty string
  doc.password = "";
  next();
});

// impelement query middleware
// studentSchema.pre("find", function (next) {});
studentSchema.statics.isStudentExists = async function (id: string) {
  return await this.findOne({ id });
};
export const StudentModel = model<TStudent, studentModelType>(
  "Student",
  studentSchema
);
