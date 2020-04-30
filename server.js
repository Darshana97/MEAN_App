var express = require("express");

var app = express();

var port = process.env.PORT || 5200;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);
var path = require("path");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/api", appRoutes);

const mongoUrl =
    "mongodb+srv://brayan:achi@cluster0-fgr2b.azure.mongodb.net/test2?retryWrites=true&w=majority";

// mongoose.connect(
//   "mongodb://localhost:27017/MeanApp",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   function (err) {
//     if (err) {
//       console.log("Not connected to the database " + err);
//     } else {
//       console.log("Succefully connected to MongoDB");
//     }
//   }
// );

mongoose.connect(
    mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    function(err) {
        if (err) {
            console.log("Not connected to the database " + err);
        } else {
            console.log("Succefully connected to MongoDB");
        }
    }
);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"));
});

app.listen(port, function() {
    console.log("Running the server on port " + port);
});