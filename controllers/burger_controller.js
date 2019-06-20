var express = require("express");

var router = express.Router();

// Imports burger model
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log("Devouring burger...");
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

router.post("/api/burgers", function(req, res){
    var name = req.body.name;
    burger.insert(name, function(result){
        console.log("Adding burger..." + name);
        res.status(200).end();
    });
});


module.exports = router;