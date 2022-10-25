require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(1337, () => {
    console.log('server started on port 1337')
})