import { Router } from "express";
import Author from "../models/Author.js";
import create from "../controllers/authors/create.js";
import read from "../controllers/authors/read.js";

let authorsRouter = Router()

/** ACA SE DEBEN CONFIGURAR LAS RUTAS PARA CRUD DE AUTHORS 
 * GET
 * POST
 * PUT
 * DELETE
*/
//create
authorsRouter.post('/',create)
// read
authorsRouter.get('/',read)

export default authorsRouter