// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");

var cors = require("cors");


// Use MongoDB
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectId;

// The database variable
var database;

// The artists collection
var ARTIST_COLLECTION = "artists";
var TIPR_COLLECTION = "tipr";

// Create new instance of the express server
var app = express();
app.use(cors());
// Define the JSON parser as a default way to consume and produce data through the exposed APIs 
app.use(bodyParser.json());

// Create link to angular buil directory
// The 'ng build' command will save the result under the 'dist' folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Local database URI.
const LOCAL_DATABASE = "mongodb://localhost:27017/app";

// Local port.
const LOCAL_PORT = 5000;

//Init the server
mongodb.MongoClient.connect( LOCAL_DATABASE, 
    {
        useUnifiedTopology : true,
        useNewUrlParser : true,
    }, function (error, client) {

        // Check if there are any problems with the connection to MongoDB database.
        if (error) {
            console.log(error);
            process.exit(1);
        }
        // Save database object from the callback for reuse.
        database = client.db();
        console.log("Database connection done.");
      
    })

     // Initialise the app.
     var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    })

/**
 * "/api/status"
 * GET : Get server status
 * PS : it's just an exemple, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status : "UP" });
});

// - - - - - - - - - - - - - - - - - - -
// ARTISTE
// - - - - - - - - - - - - - - - - - - -

/**
 * "/api/artists"
 * POST : creates a new artist
 */
 app.post("/api/artists", function (req, res) {
    var artist = req.body;
    const {name, email, password, lastName, socialMedia, stageName, description} = req.body;
   
    console.log("Name :", name);
    console.log("Artiste :",artist);

    if (!name) {
        manageError(res, "Invalid artist input", "Nom requis.", 400);
    } else if (!email) {
        manageError(res, "Invalid artist input", "Email requis.", 400);
    } else if  (!password) {
        manageError(res, "Invalid artist input", "Mot de passe requis.", 400);
    } else if (!lastName) {
        manageError(res, "Invalid artist input", "Nom de famille requis.", 400);
    } else if (!socialMedia){
        manageError(res, "Invalid artist input", "Social media requis.", 400);
    } else if (!stageName){
        manageError(res, "Invalid artist input", "Nom de scène requis.", 400);
    } else if (!description) {
        manageError(res, "Invalid artist input", "Description requis.", 400);
    }else {
        database.collection(ARTIST_COLLECTION).insertOne(artist, function (err, doc) {
            if (err) {
                manageError(req, err.message, "Failed to create a new artist.");
            } else {
                console.log("DOC : ",doc);
                res.status(201).json(doc);
            }
        });
    }
});

/**
 * "/api/artists/:id"
 * DELETE : deletes artist by id
 */
app.delete("/api/artists/:id", function (req, res) {
    const {id} = req.params;
    if (!req.params.id) {
        manageError(res, "Invalid artist id", 400);
    } else {
        database.collection(ARTIST_COLLECTION).deleteOne({_id : new ObjectID(id) }, function (err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete product.");
            } else {
                res.status(200).json(id);
            }
        });
    }
});

/**
 * "/api/artists"
 * GET : find all artists
 */
 app.get("/api/artists", function (req, res) {
    database.collection(ARTIST_COLLECTION).find({}).toArray(function (error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        } 
    });
});


/**
 * "/api/artists/:id"
 * GET : get artist by id
 */
app.get("/api/artists/:id", function (req, res) {
    const {id} = req.params;
    console.log("ID :",id)
    if (!req.params.id) {
        manageError(res, "Invalid artist id", 400);
    } else {
        database.collection(ARTIST_COLLECTION).getOne({_id : new ObjectID(id)}, function (err, result) {
            if (err) {
                manageError(res, err.message, "Failes to get artist.");
            } else {
                res.status(200).json(id);
            }
        })
    }
})

// - - - - - - - - - - - - - - - - - - -
// TIPR
// - - - - - - - - - - - - - - - - - - -

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



// - - - - - - - - - - - - - - - - -
// Errors handler.
function manageError(res, reason, message, code) {
    console.log("Error :" + reason);
    res.status(code || 500).json({ "error" : message });
}