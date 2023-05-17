import { Router } from "express";
import multerMiddleware from "../middleware/file";
import { getFile } from "../controllers/upload";
import { checkJwt } from "../middleware/session";


const router = Router();
//esta ruta pasa por dos middleware
router.post("/", checkJwt , multerMiddleware.single("myfile"), getFile);

export {router};