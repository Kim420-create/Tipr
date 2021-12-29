const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/app"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const artistsRouter = require("./routes/artists.route");
const tiprRouter = require("./routes/tipr.route");
const galleryRouter = require("./routes/gallery.route");

app.use("/artist", artistsRouter);
app.use("/tipr", tiprRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

// // Use Express
// var express = require("express");
// // Use body-parser
// var bodyParser = require("body-parser");

// var cors = require("cors");


// // Use MongoDB
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectId;

// // The database variable
// var database;

// // The artists collection
// var ARTIST_COLLECTION = "artists";
// var TIPR_COLLECTION = "tipr";

// // Create new instance of the express server
// var app = express();
// app.use(cors());
// // Define the JSON parser as a default way to consume and produce data through the exposed APIs 
// app.use(bodyParser.json());

// // Create link to angular buil directory
// // The 'ng build' command will save the result under the 'dist' folder.
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

// // Local database URI.
// const LOCAL_DATABASE = "mongodb://localhost:27017/app";

// // Local port.
// const LOCAL_PORT = 5000;

// //Init the server
// mongodb.MongoClient.connect( LOCAL_DATABASE, 
//     {
//         useUnifiedTopology : true,
//         useNewUrlParser : true,
//     }, function (error, client) {

//         // Check if there are any problems with the connection to MongoDB database.
//         if (error) {
//             console.log(error);
//             process.exit(1);
//         }
//         // Save database object from the callback for reuse.
//         database = client.db();
//         console.log("Database connection done.");
      
//     })

//      // Initialise the app.
//      var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
//         var port = server.address().port;
//         console.log("App now running on port", port);
//     })

//     const artistsRoute = require("./routes/artists.route");
//     app.use('/', artistsRoute);

// app.get("/api/artists", function (req, res) {
//     database.collection(ARTIST_COLLECTION).find({}).toArray(function (error, data) {
//         if (error) {
//             manageError(res, err.message, "Failed to get contacts.");
//         } else {
//             res.status(200).json(data);
//         } 
//     });
// });

// // - - - - - - - - - - - - - - - - -
// // Errors handler.
// function manageError(res, reason, message, code) {
//     console.log("Error :" + reason);
//     res.status(code || 500).json({ "error" : message });
// }