const mongoose = require("mongoose");
const extendSchema = require('mongoose-extend-schema');
const SheetSchema = require('./sheet.model');


const StoryArc = extendSchema(SheetSchema,
    {
        title: {type: String, required: true},
        sheetType: {type: Number, required: true},
        stasis: {type: String},
        trigger: {type: String}, 
        quest: {type: String},
        surprise: {type: String},
        critical: {type: String},
        climax: {type: String},
        reversal: {type: String},
        resolution: {type: String},
    }, 
    {collection: 'Sheets'}
);

const model = mongoose.model('StoryArcData', StoryArc)

module.exports = model