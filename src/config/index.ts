import dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  bcyrpt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
};
