const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:String,
    todoDescription:String
})

const todoModel = mongoose.model('todos', todoSchema);

module.exports = todoModel