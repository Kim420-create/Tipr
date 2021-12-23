 const app = require("express").Router();
 // artists model
 let artist = require('../models/artists.model');
 let artistsCtrl = require ('../controllers/artistsCtrl');


// /**
//  * "/api/artists/:id"
//  * GET : get artist by id
//  */
//  app.get("/api/artists/:id", function (req, res) {
//     const {id} = req.params;
//     console.log("ID :",id)
//     if (!req.params.id) {
//         manageError(res, "Invalid artist id", 400);
//     } else {
//         database.collection(ARTIST_COLLECTION).getOne({_id : new ObjectID(id)}, function (err, result) {
//             if (err) {
//                 manageError(res, err.message, "Failes to get artist.");
//             } else {
//                 res.status(200).json(id);
//             }
//         })
//     }
// })


// /**
//  * "/api/artists"
//  * POST : creates a new artist
//  */
//  app.post("/api/artists", function (req, res) {
//     var artist = req.body;
//     const {name, email, password, lastName, socialMedia, stageName, description} = req.body;
    
//     console.log("Name :", name);
//     console.log("Artiste :",artist);

//     if (!name) {
//         manageError(res, "Invalid artist input", "Nom requis.", 400);
//     } else if (!email) {
//         manageError(res, "Invalid artist input", "Email requis.", 400);
//     } else if  (!password) {
//         manageError(res, "Invalid artist input", "Mot de passe requis.", 400);
//     } else if (!lastName) {
//         manageError(res, "Invalid artist input", "Nom de famille requis.", 400);
//     } else if (!socialMedia){
//         manageError(res, "Invalid artist input", "Social media requis.", 400);
//     } else if (!stageName){
//         manageError(res, "Invalid artist input", "Nom de scène requis.", 400);
//     } else if (!description) {
//         manageError(res, "Invalid artist input", "Description requis.", 400);
//     }else {
//         database.collection(ARTIST_COLLECTION).insertOne(artist, function (err, doc) {
//             if (err) {
//                 manageError(req, err.message, "Failed to create a new artist.");
//             } else {
//                 console.log("DOC : ",doc);
//                 res.status(201).json(doc);
//             }
//         });
//     }
// });

// /**
//  * "/api/artists/:id"
//  * DELETE : deletes artist by id
//  */
// app.delete("/api/artists/:id", function (req, res) {
//     const {id} = req.params;
//     if (!req.params.id) {
//         manageError(res, "Invalid artist id", 400);
//     } else {
//         database.collection(ARTIST_COLLECTION).deleteOne({_id : new ObjectID(id) }, function (err, result) {
//             if (err) {
//                 manageError(res, err.message, "Failed to delete product.");
//             } else {
//                 res.status(200).json(id);
//             }
//         });
//     }
// });

// /**
//  * "/api/artists"
//  * GET : find all artists
//  */
  app.get("/api/artists", 
  artistsCtrl.getArtists);


 module.exports = app;