const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tiprSchema = new Schema({
    prenom : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String, 
        required : true
    }
})

module.exports = mongoose.model('tiprs', tiprSchema);