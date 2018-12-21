//Require mysql
const mysql = require("mysql");

//Setup our connection to our database
const connection = mysql.createConnection({
  host: "ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	wqf1bx9unumbo6un",
  password: "mnoo9bqzwgg0b2nd",
  database: "ob6vfuxy3lgu5r9b"
});

connection.connect(err => {
  if (err) {
    console.log(`error connection ${err.stack}`);
    return;
  }
  console.log(`Connected As ID: ${connection.threadId}`);
});

module.exports = connection;
