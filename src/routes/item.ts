//function that give us exppress to manage the routes
import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router();

/**
 * http://localhost:4000/items [get]
 */
router.get("/" , getItems);

router.get("/:id", getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id",deleteItem);


export {router};