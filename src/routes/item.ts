//function that give us exppress to manage the routes
import { Request, Response, Router } from "express";

const router = Router();

/**
 * http://localhost:4000/items [get]
 */
router.get("/", (req:Request, res:Response) => {
	res.send({data:"modelos"});
});

export {router};