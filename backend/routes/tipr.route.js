const { ObjectID } = require("bson");
const tiprRoute = express.Router();
let tipr = require('../models/tipr.model')
/**
 * "/api/tipr"
 * POST : create a new TIPR
 */
 app.post("/api/tipr", function (req, res) {
    var tipr = req.body;
    const {prenom, nom, email, password} = req.body;

    console.log("Prenom: ", prenom);
    console.log("Tipr :", tipr);

    if (!prenom) {
        manageError(res, "Invalid artist input", "Prenom requis.", 400);
    } else if (!nom) {
        manageError(res, "Invalid artist input", "Nom requis.", 400);
    } else if (!email) {
        manageError(res, "Invalid artist input", "Email requis.", 400);
    } else if (!password) {
        manageError(res, "Invalid artist input", "Mot de passe requis.", 400);
    } 
    else {
        database.collection(TIPR_COLLECTION).insertOne(tipr, function (err, doc) {
            if (err) {
                manageError(req, err.message, "Failed to create a new tipr.");
            } else {
                console.log("DOC TIPR :", doc);
                res.status(201).json(doc);
            }
        })
    }
})

/**
 *"/api/tipr"
 * GET : fin all tipr 
 */
app.get("/api/tipr", function (req, res) {
    database.collection(TIPR_COLLECTION).find({}).toArray(function (error, data) {
        if (error) {
            manageError(res, ree.message, "Failed to get contact.");
        } else {
            res.status(200).json(data);
        }
    });
});

/**
 * "/api/tipr/:id"
 * DELETE : delete tipr by ID
 */
app.delete("/api/tipr/:id", function (req, res) {
    const {id} = req.params;
    if (!req.params.id) {
        manageError(res, "Invalid tipr id", 400);
    }else {
        database.collection(TIPR_COLLECTION).deleteOne({_id : new ObjectID(id)}, function (err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete a tipr.");
            } else {
                res.status(200).json(id);
            }
        })
    }
})

/**
 * "/api/tipr/:id"
 * GET : get tipr by ID
 */
app.get("/api/tipr/:id", function (req, res) {
    const {id} = req.params;
    console.log("ID:", id)
    if (!req.params.id) {
        manageError(res, "Invalid tipr id", 400);
    } else {
        database.collection(TIPR_COLLECTION).getOne({_id : new ObjectID(id)}, function (err, result) {
            if (err) {
                manageError(res, err.message, "Failes to get tipr");
            } else {
                res.status(200).json(id);
            }
        })
    }
})

module.exports = tiprRoute;