import { Schema, model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";


const storageSchema = new Schema<Storage>(
	{
		fileName: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		idUser: {
			type: String,
			required: true,
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

const storageModel = model("storage", storageSchema);

export {storageModel};
