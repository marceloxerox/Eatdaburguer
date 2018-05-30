// *****************************************************************************
// Burger.js - DB functions.
// ******************************************************************************

// Import <- orm.js
var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createBurgers: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateBurgers: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export db functions -> burger_Controller.js.
module.exports = burger;