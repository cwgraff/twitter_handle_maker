/**
 * Created by cwgraff on 1/11/16.
 */

console.log('Client JS has safely arrived!');

var app = angular.module('twitterApp', []);

app.controller('twitterController', function($scope, $http){

    $scope.makeTwits = function(){
        console.log('Button clicked');
        $http({
            method: 'GET',
            url: '/getWords'
        }).then(function(response){
            $scope.list = response.data;
            console.log(response);
        })
        };
    });