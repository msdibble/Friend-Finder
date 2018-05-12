// Loading Data
var friends = require("../data/friends");

// Routing
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", jsonParser, function(req, res){
        friends.push(req.body);
    });
}