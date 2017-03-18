var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/app', express.static(__dirname + '/app'))
app.use('/assets', express.static(__dirname + '/assets'))

app.get('*', function (request, response) {
   response.sendfile('index.html');
})

app.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');