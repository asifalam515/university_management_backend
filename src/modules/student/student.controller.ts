import { Request, Response } from "express";
import { StudentModel } from "./student.schema";
import { studentService } from "./student.service";
import { studentValidationSchema } from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.students;

    const validatedStudentData = studentValidationSchema.safeParse(student);
    if (!validatedStudentData.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validatedStudentData.error.format(), // detailed errors
      });
    }
    // const result = await StudentModel.create(students);
    const existingStudent = await StudentModel.isStudentExists(student.id);
    if (!existingStudent) {
      const result = await studentService.createStudentToDB(
        validatedStudentData.data
      );

      res.status(200).json({
        message: "single student created",
        data: result,
      });
    } else {
      res.status(500).json({
        message: "Student already exist in DB",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create student",
      error: error.message,
    });
  }
};
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

export const studentController = { createStudent, getAllStudents };
