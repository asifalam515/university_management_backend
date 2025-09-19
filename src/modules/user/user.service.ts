import config from "../../config";
import { TStudent } from "../student/student.interface";
import { newUser } from "./user.interface";
import { User } from "./user.model";

const createStudentToDB = async (password: string, student: TStudent) => {
  // if password is not given use default password
  //create user object
  const user: newUser = {};
  if (!password) {
    user.password = config.default_password as string;
  } else {
    user.password = password;
  }
  //set users  role as student

  user.role = "student";
  //set manually generated id
  user.id = "2030100001";

  const result = await User.create(user);
  //create a student
  if (Object.keys(result).length) {
    // set id,_id as user
    student.id = result.id;
    student.user = result._id;
  }

  return result;
};
export const userService = { createStudentToDB };
