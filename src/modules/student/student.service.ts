import { TStudent } from "./student.interface";
import { StudentModel } from "./student.schema";

const createStudentToDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
export const studentService = { createStudentToDB, getAllStudentsFromDB };
