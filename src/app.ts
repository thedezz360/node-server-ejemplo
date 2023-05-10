import express, { json } from "express";
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

//specific that the request with body will be in json format
app.use(json());

//to recive request of all origins
app.use(cors());

//to use the routers
app.use(router);

//specific that port is running the app
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

//conexion to database
dbConnect(); 

