import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		
		const newUser = await registerNewUser(body);
		res.send(newUser);
	} catch (error) {
		const errorMessage = "AUTH_ERROR";
		handleHttp(res, errorMessage);
	}
};

const loginCtrl = async ({ body }: Request, res: Response) => {
	try {
		const {email, password} = body;
		const responseLoginUser = await loginUser({email, password});

		if(responseLoginUser === "PASSWORD_INCORRECT") {

			res.status(403);
			res.send(responseLoginUser);

		}else{
			
			res.send(responseLoginUser);

		}

	} catch (error) {

		const errorMessage = "ERROR_LOGIN";
		handleHttp(res, errorMessage);

	}
};

export { registerCtrl, loginCtrl };
