const mysql = require('mysql');

// if (process.env.JAWSDB_URL) {
const connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();
module.exports = connection;
// } else {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'notes_db',
//   });
//   connection.connect();
// }
