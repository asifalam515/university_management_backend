import express, { Request, Response } from "express";
import { StudentModel } from "./student.schema";
import { studentController } from "./student.controller";
export const router = express.Router();
router.post("/create-student", studentController.createStudent);
