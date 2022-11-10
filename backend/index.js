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
const sheetsRouter = require('./routes/sheets')
const blankSheetsRouter = require('./routes/blanksheets')
const characterLogRouter = require('./routes/characterlogs')
const homeWorldRouter = require('./routes/homeworlds')
const storyArcRouter = require('./routes/storyarcs')

app.use('/users', usersRouter)
app.use('/projects', projectsRouter)
app.use('/blanksheets', blankSheetsRouter)
app.use('/sheets', sheetsRouter)
app.use('/storyarcs', storyArcRouter)

// app.use('/characterlogs', characterLogRouter)
// app.use('/homeworlds', homeWorldRouter)

app.listen(1337, () => {
    console.log('server started on port 1337')
})