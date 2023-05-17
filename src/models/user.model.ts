import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
	{
		email:{
			type: String,
			required:true,
			unique:true,
		},
		password:{
			type:String,
			requided:true,
		},
		name:{
			type:String,
			required:true,
		},
		description:{
			type:String,
			default:"Soy la descripcion"
		}
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
const UserModel = model("users", UserSchema);

export default UserModel;
