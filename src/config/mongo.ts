import { connect } from "mongoose";
import { DB_URI } from "../config";

export async function dbConnect(): Promise<void> {

	try {
		const db = await connect(<string>DB_URI);
		console.log("connected to ", db.connection.name);
	} catch (error) {
		console.error(error);
	}
}
