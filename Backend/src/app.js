const express = require('express');
const todoRouter = require('./routers/todo')
const cors = require('cors');


const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/', todoRouter)
app.get('/health', (req, res) => {
    res.status(200).json({
        message:"Server health is ok"
    })
})

module.exports = app