import express, { Request, Response } from "express";
import { StudentModel } from "./student.schema";
import { studentController } from "./student.controller";
export const router = express.Router();
router.get("/", studentController.getAllStudents);
router.get("/:studentId", studentController.getSingleStudent);
router.delete("/:studentId", studentController.deleteSingleStudent);
