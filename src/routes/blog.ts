import { Router } from "express";
import { postBlog } from "../controllers/blog";

const router = Router();


router.post("/", postBlog);

export {router};