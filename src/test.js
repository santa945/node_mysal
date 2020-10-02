var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Zsd123456',
  database : 'mySever'
});
 
connection.connect();
 
var sql = 'SELECT * FROM user'
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('The res ====>: ', results);
});