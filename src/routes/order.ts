import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";


/**
 * at this route only can access the user that have a token valid
 */
const router = Router();

//call the middleware
router.get("/",checkJwt,getItems);

export {router};