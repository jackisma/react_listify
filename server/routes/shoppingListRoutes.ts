import express from "express";

import {
  createShoppingList,
  deleteShoppingList,
  getAvailableShoppingLists,
} from "../controller/shoppingListsController";

import { checkAuth } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(checkAuth, getAvailableShoppingLists).post(checkAuth, createShoppingList);
router.route("/:id").delete(checkAuth, deleteShoppingList);

export default router;