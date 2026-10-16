const toDoSchema = require('../models/ToDoItem');

//POST Controller
const postCreateItem = async (req, res, next) => {
    try {
        console.log(req.body);
        const {task, date} = req.body;
        const toDoItem = new toDoSchema(task, date);
        const ItemSave = await toDoItem.save();
        res.status(200).json({message: ItemSave});
    } catch(err) {
        console.log(err);
    }
}

exports.postCreateItem = postCreateItem;