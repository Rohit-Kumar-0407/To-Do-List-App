//External Modules
const express = require('express');
const toDoItemsRouter = express.Router();

//Local Modules
const toDoItemsController = require('../controllers/toDoItemsController');

toDoItemsRouter.get('/', toDoItemsController.getAllItems);
toDoItemsRouter.post('/', toDoItemsController.postItem);
toDoItemsRouter.put('/:id/completed', toDoItemsController.updateItem);
toDoItemsRouter.delete('/:id', toDoItemsController.deleteItem);

module.exports = toDoItemsRouter;