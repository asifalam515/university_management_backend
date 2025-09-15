export type TUser = {
  id: string;
  password: string;
  needsPasswordChane: boolean;
  role: "admin" | "user" | "faculty";
  status: "in-progress" | "blocked";
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
};
