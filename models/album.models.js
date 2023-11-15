const mongoose = require("mongoose");



const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    songs: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Music"
            },
        ]
    },
    production: {
        type: String,
        required: True
    },
    albumPic: {
        type: String,
        required: true
    }
},{timestamps: true})


const Album = mongoose.model("Album", albumSchema)

module.exports = Album