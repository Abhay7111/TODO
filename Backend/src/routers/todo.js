const express = require('express');
const todoModel = require('../models/todo')

const todoRouter = express.Router()

todoRouter.get('/todo', async (req, res) => {
    const todo = await todoModel.find()
    res.status(200).json({
        message:"This is todo get route",
        todo
    })
})

todoRouter.post('/todo', async (req, res) => {
    const {todo, todoDescription} = req.body;
    const data = await todoModel.create({
        todo, todoDescription
    })

    res.status(201).json({
        message:"Your todo created successfully",
        data
    })
})

module.exports = todoRouter