const express = require('express')
const SheetSchema = require('../models/sheet.model')
const router = express.Router()


router.post('/', async (req, res) => {
    const sheet = new SheetSchema ({
        title: req.body.title,
        sheetType: req.body.sheetType
    })

    try {
        const newSheet = await sheet.save()
        res.status(201).json(newSheet)
    }
    catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'error creating sheet'})
    }
})

router.get('/:id', getSingleSheet, (req, res) => {
    res.json(res.sheet)
})

async function getSingleSheet(req, res, next) {
    let sheet
    try {
        sheet = await SheetSchema.findById(req.params.id)
        if (sheet == null) {
            return res.status(404).json({message: 'Cannot find sheet associated with id'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.sheet = sheet
    next()

}

module.exports = router
