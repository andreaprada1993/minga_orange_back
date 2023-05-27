import { Router } from "express";
import read from "../controllers/manga/read.js";

const mangasRouter = Router()

mangasRouter.get("/",read )

export default mangasRouter