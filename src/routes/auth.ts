//function that give us exppress to manage the routes
import { Router } from "express";
import { registerCtrl,loginCtrl } from "../controllers/auth";


const router = Router();
/** http://localhost:4000/auth/register [POST] */
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export {router};