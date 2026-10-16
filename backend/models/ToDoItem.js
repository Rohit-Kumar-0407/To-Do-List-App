const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema ({
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    competed: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ToDoItems", ToDoSchema);