// this will valid the access to some routes
import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/reqExtend.interface";

//implementamos esta interfaz ya que el typeScript no nos permite agregar nuevas 
//propiedades a la request



const checkJwt = async(req:RequestExt, res: Response, next: NextFunction)=>{
	try {
		//get token
		const jwtByUser = req.headers.authorization || "";
		const jwt = jwtByUser.split(" ")[1];
		console.log(jwt);

		//isUser -> token desencriptado
		//as especifica el tipo de archivo que se retorna
		const isUser =  verifyToken(jwt) as {id:string};
		console.log({isUser});

		//if token is not valid
		if(!isUser){

			res.status(401);
			res.send("no_tienes_un_jwt_valido");

		}else{
			
			//implement a object in the request
			req.user = isUser;
			next();
		}


	} catch (error) {
		console.log(error);
		res.status(400);
		res.send("SESSION_NOT_VALID");
	}
};

export {checkJwt};