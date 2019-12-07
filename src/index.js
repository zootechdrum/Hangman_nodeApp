var prompt = require('prompt');
var Word = require('./Word')

var array = ["Maddax"]

randomWord = new Word(array[0])


isGameOver = function() {
    var current =  randomWord.callDisplay()

    if (current === array[0]){
    console.log("Win")
    }else {
        takeUserGuess()
    }
}


function takeUserGuess() {
prompt.get({
    properties: {
        letter: {
            description: ("What is your letter")
        }
    }
},function (err, result) {
       randomWord.callGuessFunc(result.letter)
       randomWord.callDisplay()
       isGameOver()
    
    });
}

takeUserGuess()

//nail kit where you can do your own nails
//drill bit fake nails liquid 
//