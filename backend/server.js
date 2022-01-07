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
const uploadRouter = require("./routes/upload.route")


app.use("/artist", artistsRouter);
app.use("/tipr", tiprRouter);
app.use("/upload", uploadRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
