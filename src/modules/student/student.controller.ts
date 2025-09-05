import { Request, Response } from "express";
import { StudentModel } from "./student.schema";

const createStudent = async (req: Request, res: Response) => {
  try {
    const students = req.body.students;
    const result = await StudentModel.create(students);
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
