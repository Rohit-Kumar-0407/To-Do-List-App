const toDoModel = require('../models/ToDoItem');

exports.postCreateItem = async (req, res, next) => {
    try {
        const items = await toDoModel.find();
        res.json(items);
    } catch(err) {
        console.log(err);
    }
}

exports.getAllItems = async (req, res, next) => {
    try {
        console.log(req.body);
        const {task, date} = req.body;
        const toDoItem = new toDoModel({task, date}    );
        const ItemSave = await toDoItem.save();
        res.status(200).json({message: ItemSave});
    } catch(err) {
        console.log(err);
    }
}

exports.updateItem = async (req, res, next) => {
    const id = req.params.id;
    const toDoItem = await toDoModel.findById(id);
    toDoItem.completed = true;
    await toDoItem.save();
    res.status(200).json({message: id + ' Updated Successfully'})
}

exports.deleteItem = async (req, res, next) => {
    const id = req.params.id;
    await toDoModel.findByIdAndDelete(id);
    res.status(204).json({message: id + ' Deleted Successfully'});
}