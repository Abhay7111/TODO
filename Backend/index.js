require('dotenv').config()
const app = require('./src/app')
const ConnectToDB = require('./src/config/connect')

ConnectToDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT : ${process.env.PORT}`)
})