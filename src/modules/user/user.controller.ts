import { User } from "./user.model";
import { userService } from "./user.service";
import { userValidationSchema } from "./user.validation";

const createStudent = async (req: Request, res: Response) => {
  const { password, student } = req.body;

  const result = await userService.createStudentToDB(password, student);

  res.status(200).json({
    message: "single student created",
    data: result,
  });
};
