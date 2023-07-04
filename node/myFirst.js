var express = require('express');
var app = express();
const { createPool } = require('mysql')

const pool = createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'quiz',
   connectionLimit: 10
})
var data;

pool.query(`select * from user_role`, (err, res, fields) => {
   if (err) {
      return console.log(err);
   }
   data = res;
   return console.log(res);
})

app.get('/', function (req, res) {
   res.send(data);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})