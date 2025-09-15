import { Schema, model, connect } from "mongoose";
import { TUser } from "./user.interface";
const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "faculty"],
  },
  status: {
    type: String,
    enum: ["in-progress", "blocked"],
  },
  needsPasswordChange: {
    type: Boolean,
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
  isDeleted: Boolean,
});
export const User = model("User", userSchema);
