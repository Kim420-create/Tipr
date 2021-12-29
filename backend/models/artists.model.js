const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    stageName : {
        type : String,
        require :true
    },
    name : {
        type : String,
        require : true
    },
    lastName: {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    socialMedia : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    }
})

module.exports = mongoose.model('artists', artistSchema);