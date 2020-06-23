const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'notes_db',
});

connection.connect(() => {
  console.log('listening');
});
