/**
 * Created by cwgraff on 1/11/16.
 */

var express = require('express');
var path = require('path');

var router = express.Router();

router.get("/getWords", function(request, response){
    //response.sendFile(path.join(__dirname, '../../public/views/index.html'));
    response.send('Get words router working!');
});

module.exports = router;