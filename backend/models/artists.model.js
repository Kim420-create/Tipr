const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    stageName : {
        type : String
    },
    name : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    socialMedia : {
        type : String
    },
    password : {
        type : String
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model('artist', artistSchema);