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
        var numOne = randomNumber(-0.5, 9.49);
        var numTwo = randomNumber(-0.5, 9.49);

        namesDone.push(adjectives.adjective[numOne] + nouns.noun[numTwo]);
    }

    return namesDone;
}

module.exports = combineWords;


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}