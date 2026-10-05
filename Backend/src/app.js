const express = require('express');

const app = express();

app.use(express.json())

app.get('/health', (req, res) => {
    res.status(200).json({
        message:"Server health is ok"
    })
})

module.exports = app