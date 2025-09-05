import express, { Request, Response } from "express";
import { router } from "./modules/student/student.route";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/students", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello next");
});
export default app;
