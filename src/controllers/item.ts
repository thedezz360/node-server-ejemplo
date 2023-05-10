//the function of controllers is only manage the request and response, 
//not should have bussines logic


import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req:Request, res:Response) =>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_GET_ITEM";
		handleHttp(res,errorMesagge );
	}
};

const getItems=(req:Request, res:Response)=>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_GET_ITEMS";
		handleHttp(res,errorMesagge );
	}
};

const updateItem= (req:Request, res:Response) => {
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_UPDATE_ITEM";
		handleHttp(res,errorMesagge );
	}
};

const postItem = (req:Request, res:Response)=>{
	try {
		const {body} = req;
		res.send(body);
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_POST_ITEM";
		handleHttp(res,errorMesagge );

	}
};

const deleteItem=(req:Request, res:Response)=>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_DELETE_ITEM";
		handleHttp(res,errorMesagge );
	}
};

export {getItem, getItems, updateItem, postItem, deleteItem};