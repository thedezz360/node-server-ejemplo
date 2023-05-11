import { Schema, Types, model, Model } from "mongoose";
import {Car} from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
	{
		name:{
			type:String,
			required:true,
		},
		color:{
			type: String,
			required:true
		},
		gas:{
			type:String,
			enum: ["gasoline", "electric"],
			required:true
		},
		year:{
			type:Number,
			required:true
		},
		description:{
			type:String,
			required:true
		},
		price:{
			type: Number,
			required:true
		},
		
	},

	//versionKey = se guarda un dato por version
	//timestamps = cuando guardamos un dato en la base de datos,
	//se crea una fecha de creacion y una fecha de modificacion
	{
		timestamps:true,
		versionKey:false
	}
);

//nombre que llevara la collection en la base de datos
//schema que se utilizara para crear la collection en la base de datos
const ItemModel = model("items", ItemSchema);

export default ItemModel;

