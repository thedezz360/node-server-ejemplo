//encript
import { hash, compare } from "bcryptjs";  

const encrypt = async(passPlain:string)=>{
	//salt -> 8 , is the seed to encrypt password
	const passwordHash = await hash(passPlain,8);
	return passwordHash;
};


//verified
const verified= async(passPlain:string, passHash:string)=>{
	const isCorrect = await compare(passPlain, passHash);
	return isCorrect;
};

export {encrypt, verified};