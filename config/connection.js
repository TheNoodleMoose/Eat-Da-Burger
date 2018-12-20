//Require mysql
const mysql = require("mysql");

//Setup our connection to our database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.log(`error connection ${err.stack}`);
    return;
  }
  console.log(`Connected As ID: ${connection.threadId}`);
});

module.exports = connection;
