// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb){
        var query = "SELECT * FROM burgers;";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(burger_name, cb){
        var query = "INSERT INTO burgers (burger_name) VALUES ?";
        connection.query(query, [burger_name], function(err, result){
            if(err){
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(burger_id, cb){
        var query = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(query, [burger_id], function(err, result){
            if(err){
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object
module.exports = orm;

