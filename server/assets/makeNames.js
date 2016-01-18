/**
 * Created by cwgraff on 1/11/16.
 */

var express = require('express');
var adjectives = require('./adjectiveList');
var nouns = require('./nounList');
var namesDone = [];


function combineWords() {


    namesDone = [];

    for (var i = 0; i < 10; i++) {
        var numOne = randomNumber(0, 10);
        var numTwo = randomNumber(0, 10);

        namesDone.push(adjectives.adjective[numOne] + nouns.noun[numTwo]);
    }

    return namesDone;
}

module.exports = combineWords;


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}