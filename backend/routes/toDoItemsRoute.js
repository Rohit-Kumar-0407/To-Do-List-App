//External Modules
const express = require('express');
const toDoItemsRouter = express.Router();

//Local Modules
const toDoItemsController = require('../controllers/toDoItemsController');

//GET Routes


//POST Routes
toDoItemsRouter.post('/create', toDoItemsController.postCreateItem);

module.exports = toDoItemsRouter;