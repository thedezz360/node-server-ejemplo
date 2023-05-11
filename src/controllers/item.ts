//the function of controllers is only manage the request and response, 
//not should have bussines logic


import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItem = async (req:Request, res:Response) =>{
	try {

		const {id} = req.params;
		const car = await getCar(id);
		const data = car ? car : "NOT_FOUND";
		res.send(data);

	} catch (error) {

		// notify errors
		const errorMesagge = "ERROR_GET_ITEM";
		handleHttp(res,errorMesagge );

	}
};

const getItems= async (req:Request, res:Response)=>{
	try {
		
		const cars = await getCars();
		res.send(cars);

	} catch (error) {

		// notify errors
		const errorMesagge = "ERROR_GET_ITEMS";
		handleHttp(res,errorMesagge );

	}
};

const updateItem= async ({params, body}:Request, res:Response) => {
	try {

		
		const carUpdated = await updateCar(params.id, body );
		res.send(carUpdated);

	} catch (error) {

		// notify errors
		const errorMesagge = "ERROR_UPDATE_ITEM";
		handleHttp(res,errorMesagge );
	}
};

const postItem = async(req:Request, res:Response)=>{
	try {

		const {body} = req;
		const responseItem = await insertCar(body);
		res.send(responseItem);

	} catch (error) {

		// notify errors
		const errorMesagge = "ERROR_POST_ITEM";
		handleHttp(res,errorMesagge,error );

	}
};

const deleteItem= async ({params}:Request, res:Response)=>{
	try {

		const carDeleted = await deleteCar(params.id);
		res.send(carDeleted);

	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_DELETE_ITEM";
		handleHttp(res,errorMesagge );
	}
};

export {getItem, getItems, updateItem, postItem, deleteItem};