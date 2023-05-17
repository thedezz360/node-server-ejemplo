import { storageModel } from "../models/storage.model";
import { Storage } from "../interfaces/storage.interface";

const registerUpload = async ({fileName, idUser, path}:Storage)=>{
	const responseStorage = await storageModel.create({fileName, idUser, path});
	return responseStorage;
};

export {registerUpload};