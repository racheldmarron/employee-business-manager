var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jonistevie59!",
  database: "employees"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;