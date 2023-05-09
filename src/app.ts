import express from "express";
import {PORT } from "./config";

//2 ways to upload env variables
//1
import "dotenv/config";
//2
//import dotenv from "dotenv";
//dotenv.config();

import {router} from "./routes/index";
import cors from "cors";
import { dbConnect } from "./config/mongo";


const app = express();


app.use(cors());

app.use(router);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

//conexion to database
dbConnect();


