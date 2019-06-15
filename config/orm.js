// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
};

// Export the orm object
module.exports = orm;

