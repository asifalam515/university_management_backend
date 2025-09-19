import { User } from "./user.model";
import { userService } from "./user.service";
import { userValidationSchema } from "./user.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    // const validatedStudentData = userValidationSchema.safeParse(student);
    // if (!validatedStudentData.success) {
    //   return res.status(400).json({
    //     message: "Validation failed",
    //     errors: validatedStudentData.error.format(), // detailed errors
    //   });
    // }
    // // const result = await StudentModel.create(students);
    // const existingStudent = await User.isStudentExists(student.id);
    // if (!existingStudent) {
    //   const result = await userService.createStudentToDB(
    //     validatedStudentData.data
    //   );
      const result = await userService.createStudentToDB(password,student
     )

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

