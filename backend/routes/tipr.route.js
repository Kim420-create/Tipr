let tiprCtrl = require('../controllers/tiprCtrl')

const app = require("express").Router();

/**
 * POST : create a new tipr
 */
app.post("/add", tiprCtrl.createTipr);

/**
 * GET : find all tipr
 */
app.get("", tiprCtrl.getTipr);

/**
 * Get : get tipr by Id
 */
app.get("/:id", tiprCtrl.getTiprbyId);

/**
 * DELETE : delete tipr by ID
 */
app.delete("/delete/:id", tiprCtrl.deleteById)

/**
 * UPDATE : modify a Tipr by id
 */
app.put("/update/:id", tiprCtrl.updateTipr);


module.exports = app;