import {  Response } from "express";
import { RequestExt } from "../interfaces/reqExtend.interface";
import { registerUpload } from "../services/storage.service";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req:RequestExt, res:Response)=>{
	try {
		const {user, file} = req;
		console.log({user});

		const dataToRegister:Storage= {
			fileName:`${file?.filename}`,
			path:`${file?.path}`,
			idUser:`${user?.id}`,
		};

		const response = await registerUpload(dataToRegister);

		res.send(response);
		
	} catch (error) {
		res.status(402);
		res.send("ERROR_GET_FILE_UPLOAD");
		console.log("error");
	}
	
};

export {getFile};