const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

router.post('/register', async (req,res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: newPassword,
        })
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'Duplicate username'})
    }
})

router.post('/login', async (req,res) => {
    const user = await User.findOne({
        username: req.body.username, 
    })

    if(!user){
        return res.json({status: 'error', error: 'Invalid Login'})
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordValid) {
        return res.json({status: 'ok', user: true })
    } 
    else {
        return res.json({status: 'error', user: false })
    }
})

module.exports = router