
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypst.handle";
import { generateToken } from "../utils/jwt.handle";

/**
 * 
 * @param authUser datos del formulario
 */
const registerNewUser = async (authUser: User)=>{
	//check if user exist
	const checkIs = await UserModel.findOne({email:authUser.email});
	if ( checkIs) return "ALREADY_USER";

	//encript password
	const passwordHash =  await encrypt(authUser.password);

	//create user in data base
	const registerNewUser = await UserModel.create({
		name:authUser.name,
		email:authUser.email, 
		password: passwordHash,
	});

	return registerNewUser;
};

const loginUser = async ({email, password}:Auth)=>{
	//check if user exist
	const checkIs = await UserModel.findOne({email});
	if ( !checkIs) return "NOT_EXIST_USER";

	//get hash password from data base
	const passHash = checkIs.password;

	//check password
	const passOk = await verified(password, passHash);
	if(!passOk) return "PASSWORD_INCORRECT";

	//before check passwork is ok, generate token
	//we can use id or email in generateToken
	const token = generateToken(checkIs.id);
	
	const data= {
		token,
		user:checkIs,
	};

	//return object with token and user info
	return data;
};

export {registerNewUser, loginUser};