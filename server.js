// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// Setting up the Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Creating routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Starting the server by listening
app.listen(PORT, function(){
    console.log("App is listening on port " + PORT);
});

