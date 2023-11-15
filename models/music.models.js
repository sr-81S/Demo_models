const mongoose = require("mongoose")


const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    music: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
},{timestamps: true})


const Music = mongoose.model("Music", musicSchema)

module.exports = Music