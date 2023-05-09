//cargador dinamico de rutas


import { Router } from "express";
import {readdirSync} from "fs";

const router = Router();

//__dirname : return the path of current directory
const PATH_ROUTER = `${__dirname}`;  // /src/routes/

/**
 * remove the extensions 
 * @param fileName name of file with extension
 * @returns string wiht the name of file without extension
 */
const cleanFileName = (fileName:string) => {
	//shift extracts the first element of the array
	const file = fileName.split(".").shift();
	return file;
};

//funtion that return an array with the names of the files in the directory specific
readdirSync(PATH_ROUTER).filter((fileName) => {
	const cleanName = cleanFileName(fileName);
	if(cleanName !== "index"){

		//this is typeScript, dinamic importation
		import(`./${cleanName}`).then((moduleRouter)=>{
			console.log(`se esta cargando la ruta... /${cleanName}`);
			router.use(`/${cleanName}` , moduleRouter.router);
			
		});


	}
});


export {router};