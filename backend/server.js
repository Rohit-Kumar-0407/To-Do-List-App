//Core Modules
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MongoStore = require('connect-mongo').default;
const cors = require('cors');

//Local Modules
const toDoItemsRouter = require('./routes/toDoItemsRoute');
const ErrorRouter = require('./routes/ErrorRoute');

//Common Commands
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/todo', toDoItemsRouter);
app.use('/', ErrorRouter);

//Server
const PORT = 3001;
mongoose.connect(process.env.MONGODB_URL).then((client) => {
    console.log('Connected To MongoDB');
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})