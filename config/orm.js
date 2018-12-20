// We require our connection we setup
const connection = require("./connection");

// We create a new object that will be making all our query request
const orm = {
  // Selectall will grab all the information from the burgers table and send it back.
  //This info will be stored in a callBack function
  selectAll(tableInput, callBack) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
    });
  },

  //InsertOne will insert the values of the new burger into our database
  insertOne(tableInput, col, value, callBack) {
    const queryString = `INSERT INTO ${tableInput} (${col}) VALUES ("${value}");`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
      console.log("Updated Database With New Burger!");
    });
  },

  //updateOne will update the burgers devoured to true once it has been devoured.
  // It takes in the id to decide which burger will be updated.
  updateOne(tableInput, col, id, callBack) {
    const queryString = `UPDATE ${tableInput} SET ${col} = TRUE WHERE id = ${id}`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
    });
  }
};

//Export the orm to be used in models/burger.js
module.exports = orm;
