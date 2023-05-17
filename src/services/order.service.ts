//for this example we use interface car and itemModel
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items.model";

const getOrders = async () => {
	const responseItem = await ItemModel.find({});
	return responseItem;
};

export {getOrders};