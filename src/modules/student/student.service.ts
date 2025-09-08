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
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.find({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
};
export const studentService = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
