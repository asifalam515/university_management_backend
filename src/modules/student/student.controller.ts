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

    const result = await studentService.createStudentToDB(
      validatedStudentData.data
    );

    res.status(200).json({
      message: "single student created",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create student",
      error: error.message,
    });
  }
};

export const studentController = { createStudent };
