// We require our orm we created
const orm = require("../config/orm");
// We create a new object called burgers, this will hold all our methods for making queries
const burgers = {
  // This method will grab all the burgers in the database and we pass it a callback to hold
  // The results
  all(callBack) {
    orm.selectAll("burgers", res => {
      callBack(res);
    });
  },

  // This method will create a new burger and insert it into the database.
  // We pass it a callback to hold the results
  create(cols, value, callBack) {
    orm.insertOne("burgers", cols, value, res => {
      callBack(res);
    });
  },

  // This method will update our database when a burger has been devoured
  // We pass it a callback to hold our results
  update(cols, id, callBack) {
    orm.updateOne("burgers", cols, id, res => {
      callBack(res);
    });
  }
};

module.exports = burgers;
