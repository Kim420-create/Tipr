const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Image Upload
const imageStorage = multer.diskStorage({
    destination : 'images', // Destination to store image
    filename : (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
        // file.fildname is name of the field (image), path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage : imageStorage,
    limits : {
        fileSize : 1000000 // 1000000 Bytes = 1MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { // Upload only png and jpg format
            return cb(new Error('Veuillez télécharger une image'))
        }
        cb(undefined, true)
    }
})

// For a single image upload
router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({error : error.message})
})

module.exports = router