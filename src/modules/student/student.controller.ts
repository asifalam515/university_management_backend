import { Request, Response } from "express";
import { StudentModel } from "./student.schema";
import { studentService } from "./student.service";
import { studentValidationSchema } from "./student.validation";

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      message: "All student retrieve",
      data: students,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to retrive all students",
      error: error.message,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const student = await studentService.getSingleStudentFromDB(studentId);
    res.status(500).json({
      status: true,
      message: "Get Single student",
      data: student,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create student",
      error: error.message,
    });
  }
};
const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const student = await studentService.deleteStudentFromDB(studentId);
    res.status(500).json({
      status: true,
      message: "Deleted Single student",
      data: student,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to Delete student",
      error: error.message,
    });
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
