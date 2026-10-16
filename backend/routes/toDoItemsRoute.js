//External Modules
const express = require('express');
const toDoItemsRouter = express.Router();

//Local Modules
const toDoItemsController = require('../controllers/toDoItemsController');

toDoItemsRouter.get('/', toDoItemsController.getAllItems);
toDoItemsRouter.post('/', toDoItemsController.postItem);
toDoItemsRouter.put('/:id/completed', toDoItemsController.updateItems);
toDoItemsRouter.delete('/:id', toDoItemsController.deleteItems);

module.exports = toDoItemsRouter;