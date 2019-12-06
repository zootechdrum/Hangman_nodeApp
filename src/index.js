var prompt = require('prompt');
var Word = require('./Word')


prompt.start();

prompt.get({
    properties:{
        name:{
            description: "What is your name?"
        }
    } 
    }, function (err, result) {
        console.log("You said your name is: " + result.name)
})