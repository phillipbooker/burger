var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll(function(result){
            cb(result);
        });
    },
    insert: function(name, cb){
        orm.insertOne(name, function(result){
            cb(result);
        });
    },
    update: function(id, cb){
        orm.updateOne(id, function(result){
            cb(result);
        });
    }
};

module.exports = burger;