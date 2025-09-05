import { TStudent } from "./student.interface";
import { StudentModel } from "./student.schema";

const createStudentToDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};
export const studentService = { createStudentToDB };
