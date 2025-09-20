import config from "../../config";
import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentToDB = async (password: string, student: TStudent) => {
  // if password is not given use default password
  //create af user object
  const userData: Partial<TUser> = {};
  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }
  //set users  role as student

  userData.role = "student";
  //set manually generated id
  userData.id = "2030100001";

  const result = await User.create(userData);
  //create a student
  if (Object.keys(result).length) {
    // set id(embed),_id(referancing) as user
    student.id = result.id;
    student.user = result._id;
  }

  return result;
};
export const userService = { createStudentToDB };
