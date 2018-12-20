const connection = require("./connection");

const orm = {
  selectAll(tableInput, callBack) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
    });
  },

  insertOne(tableInput, col, value, callBack) {
    const queryString = `INSERT INTO ${tableInput} (${col}) VALUES ("${value}");`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
      console.log("Updated Database");
    });
  },

  updateOne(tableInput, col, id, callBack) {
    const queryString = `UPDATE ${tableInput} SET ${col} = TRUE WHERE id = ${id}`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      callBack(data);
    });
  }
};

module.exports = orm;
