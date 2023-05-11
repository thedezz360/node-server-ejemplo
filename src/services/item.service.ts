import { config } from "dotenv";
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items.model";

const insertCar = async (item:Car) => {
	//created the document in the collection of db
	return await ItemModel.create(item);
	
};

const getCars = async()=>{
	//find all
	return await ItemModel.find({});

};

const getCar = async(id:string)=>{

	return await ItemModel.findById(id);
	
	//we too can find this way, findOne({_id:id})

};

/**
 * 
 * @param id 
 * @param data 
 * @returns 
 */

const updateCar = async (id:string, data:Car)=>{
	
	return await ItemModel.findOneAndUpdate( 
		{_id:id} , //id to search
		data,  //data to update
		{new: true}); //specific that return a document updated
		
	//we too can find this way, findByIdAndUpdate(id,data,{new:true})
};

const deleteCar = async(id:string)=>{

	return await ItemModel.findOneAndDelete({_id:id});

};

export {insertCar, getCars, getCar, updateCar, deleteCar};