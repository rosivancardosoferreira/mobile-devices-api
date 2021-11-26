const express = require("express");
const itemRouter = express.Router();

const itemController = require("../controllers/itemController");

itemRouter.get("/", itemController.index);
itemRouter.post("/", itemController.create);
itemRouter.get("/my_items/:id", itemController.myItems);

module.exports = itemRouter;