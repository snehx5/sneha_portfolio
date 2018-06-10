var express = require('express');
var app = express();
var http = require('http');
var fs = require("fs");
var router = express('router');






app.use(express.static('public'));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});


