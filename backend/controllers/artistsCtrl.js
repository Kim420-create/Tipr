let artists = require("../models/artists.model")

// // GET ALL Artists
exports.getArtists = (req, res) => {
    artists.find({}).then(data => {
        res.json(data)
    })
};
//GET by ID
exports.getArtistsbyId = (req, res) => {
    artists.find({_id : req.params.id}).then(data => {
        res.json(data);
    })
}
// DELETE : delete by id
exports.deleteById = (req, res) => {
    artists.find({_id : req.params.id}).then(data => {
        res.json(data);
    }) 
}
// POST : Create a new artist
exports.createArtist = (req, res) => {
    const newArtist = new artists(req.body);
    newArtist.save().then(post => {
        if(post) {
            res.json(post)
        }
    })
    // .catch(err => res.status(400).json({err}))
}
// UPDATE : modify an artist
exports.updateArtist = (req, res) => {
    artists.findOneAndUpdate({_id:req.params.id}, req.body, {new : true}, function (err, post) {
        if (err) {
            console.log(err, req.method+req.originalUrl);
            return res.json({error : true});
        }
        res.json(post)
    })
}
