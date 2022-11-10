const express = require('express')
const SheetSchema = require('../models/sheet.model')
const StoryArc = require('../models/storyarc.model')
const router = express.Router()

//Creating a new blank sheet
router.post('/', async (req, res) => {
    const storyArc = new StoryArc ({
        title: req.body.title,
        sheetType: req.body.sheetType,
        content: req.body.content,
        stasis: req.body.stasis,
        trigger: req.body.trigger, 
        quest: req.body.quest,
        surprise: req.body.surprise,
        critical: req.body.critical,
        climax: req.body.climax,
        reversal: req.body.reversal,
        resolution: req.body.resolution
    })

    try {
        const newStoryArc = await storyArc.save()
        res.status(201).json(newStoryArc)
    }
    catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'error creating blank sheet'})
    }
})

//Getting blank sheet by sheet id
router.get('/:id', getSingleStoryArc, (req, res) => {
    res.json(res.storyArc)
})

async function getSingleStoryArc(req, res, next) {
    let storyArc
    try {
        storyArc = await StoryArc.findById(req.params.id)
        if (storyArc == null) {
            return res.status(404).json({message: 'Cannot find story arc associated with id'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.storyArc = storyArc
    next()

}

module.exports = router