// Loading Data
var friends = require("../data/friends");

// Routing
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // POST handles the incoming survey results and is used to handle the compatibility logic
    app.post("/api/friends", jsonParser, function(req, res){
        friends.push(req.body);

        // var compatibleFriend = compatibility(request, response);
        // response.json(compatibility);
        
    });

};

function userValidation() {
}

function compatibility(req, res) {
    var newFriend = {
        name: "",
        photo: "",
        scoreDifference: 1000
    }

    var userAnswers = req.body;
    var userScores = userAnswers.scores;

    var totalDifference = 1000;

    // Loop through the "friends" array
    for(var i = 0; i < friends.length; i++) {

    }
}

