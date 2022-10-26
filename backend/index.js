require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)

const usersRouter = require('./routes/users')
const projectsRouter = require('./routes/projects')

app.use('/users', usersRouter)
app.use('/projects', projectsRouter)

app.listen(1337, () => {
    console.log('server started on port 1337')
})