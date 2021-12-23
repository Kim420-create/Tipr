const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    stageName : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,

    },
    lastName : {
        type : String,
        required : true,

    },
    email : {
        type : String,
        unique : true,
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

module.exports = mongoose.model('artists', artistSchema);