//External Modules
const express = require('express');
const ErrorRouter = express.Router();

//Local Modules
const ErrorController = require('../controllers/ErrorController');

ErrorRouter.get('/', ErrorController.getPage404);

module.exports = ErrorRouter;