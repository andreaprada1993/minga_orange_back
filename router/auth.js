import { Router } from "express";
import read from "../controllers/auth/read.js";

const authRouter = Router()

authRouter.get("/" ,read)

export default authRouter