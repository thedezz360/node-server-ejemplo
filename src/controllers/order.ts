import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/reqExtend.interface";

const getItems =  (req:RequestExt, res:Response)=>{
	try {
		res.send({
			data: "esto solo lo ve las personas con sesion / jwt",
			user: req.user
		});
	} catch (error) {
		const errorMessage = "Error_order";
		handleHttp(res,errorMessage);
	}
};

export {getItems};