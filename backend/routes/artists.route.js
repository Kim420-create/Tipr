let artists = require('../models/artists.model')
let artistCtrl = require("../controllers/artistsCtrl")

const app = require("express").Router();

/**
 * 
 * POST : creates a new artist
 */
 app.post("/add", artistCtrl.createArtist);

/**
 * 
 * GET : find all artists
 */
 app.get("", artistCtrl.getArtists);

/**
 * 
 * GET : get artist by ID
 */
 app.get("/:id", artistCtrl.getArtistsbyId);

/**
 * 
 * DELETE : deletes artist by ID
 */
 app.delete("/delete/:id", artistCtrl.deleteById);

 /**
  * UPDATE : modify artist by ID
  */
 app.put('/update/:id', artistCtrl.updateArtist);


 

module.exports = app;