const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Connection string
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hr-pmo"
});

// Connect to mysql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'welcome' })
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

app.get('/demoList', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * FROM task";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
 
app.post('/demoInsert', function (req, res) {
  //Make SQL statement:
  var sql = "INSERT INTO task (Title, Status) VALUES ?";
  //Make an array of values:
  var values = [
    ['Go to Movie', 'pending']
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data Inserted' });
  });
});