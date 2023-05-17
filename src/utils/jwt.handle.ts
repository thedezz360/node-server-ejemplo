//to generate jwt (json web token)

import { sign, verify, Secret } from "jsonwebtoken";

//our sign to sign tokens
import { JWT_SECRET } from "../config";


const generateToken =  (id:string)=>{
	
	//paylaod, data that want save in the token, ej: id
	const payload = {id};
	const secretKey= <string>JWT_SECRET;
	const options= {
		expiresIn:"2h"
	};

	const jwt =  sign(payload, secretKey, options );

	return jwt;

};
	

const verifyToken= (jwt:string) => {

	const secretKey= <string>JWT_SECRET;

	const isOk = verify(jwt, secretKey);
	return isOk;
};

export {generateToken, verifyToken};