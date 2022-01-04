let artists = require("../models/artists.model")

// POST : Create a new artist
exports.createArtist = (req, res) => {
    console.log("request", req.body);
    const newArtist = new artists(req.body);
    newArtist.save().then(post => {
        if(post) {
            console.log(post);
            res.json(post)
        }
    })
}
// GET : get all Artists
exports.getArtists = (req, res) => {
    
    artists.find({}).then(data => {
        res.json(data)
    })

};
//GET : get artist by ID
exports.getArtistsbyId = (req, res) => {
    console.log("1 :", req.params.id);
    artists.find({_id : req.params.id}).then(data => {
        res.json(data);
    })
};
// DELETE : delete artist by id
exports.deleteById = (req, res) => {
    artists.findByIdAndDelete({_id : req.params.id}).then(data => {
        res.json(data);
    }) 
};
// UPDATE : modify an artist
exports.updateArtist = (req, res) => {
    artists.findOneAndUpdate({_id:req.params.id}, req.body, {new : true}, function (err, post) {
        if (err) {
            console.log(err, req.method+req.originalUrl);
            return res.json({error : true});
        }
        res.json(post)
    })
};

