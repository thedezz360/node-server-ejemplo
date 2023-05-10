//the function of controllers is only manage the request and response, 
//not should have bussines logic


import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req:Request, res:Response) =>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_GET_BLOG";
		handleHttp(res,errorMesagge );
	}
};

const getBlogs=(req:Request, res:Response)=>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_GET_BLOG";
		handleHttp(res,errorMesagge );
	}
};

const updateBlog= (req:Request, res:Response) => {
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_UPDATE_BLOG";
		handleHttp(res,errorMesagge );
	}
};

const postBlog = (req:Request, res:Response)=>{
	try {
		const {body} = req;
		res.send(body);
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_POST_BLOG";
		handleHttp(res,errorMesagge );

	}
};

const deleteBlog=(req:Request, res:Response)=>{
	try {
		
	} catch (error) {
		// notify errors
		const errorMesagge = "ERROR_DELETE_BLOG";
		handleHttp(res,errorMesagge );
	}
};

export {getBlog, getBlogs, updateBlog, postBlog, deleteBlog};