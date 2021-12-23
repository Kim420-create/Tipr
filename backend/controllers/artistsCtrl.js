let artists = require('../models/artists.model') 

// exports.getArtists = (req, res) => {
//     artist.find()(function (error, data) {
//         if (error) {
//             manageError(res, err.message, "Failed to get contacts.");
//         } else {
//             res.status(200).json(data);
//         } 
//     });
// }

exports.getArtists = (req, res) => {
    console.log("TEST")
    artists.find().then(data => {
        console.log(data)
        res.json("data")
    })
     
}