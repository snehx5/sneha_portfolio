var express = require('express');
var app = express();
var http = require('http');
var fs = require("fs");
var router = express('router');


var dbConfig = {
   server: 'localhost',
   database: 'CitDb',
   user: 'cq',
   password: 'sqlkdkkd3',
   port: 1433
};




app.use(express.static('public'));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});

app.get('/data', function(req, res) {
fs.readFile( __dirname + "/" + "data/entries.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
   });

});
