/**
 * Created by cwgraff on 1/11/16.
 */

var express = require('express');
var index = require('./routers/index');
var sendNames = require('./assets/makeNames');
//var getWords = require('./routers/get_words');
var app = express();

app.use(express.static('public'));


app.use('/', index);

app.get("/getWords", function(request, response){
    response.send(sendNames());
    //response.send('Get words router working!');
});



var server = app.listen(3000, function(){
    console.log('Listening on Port 3000')
});

