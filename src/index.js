var prompt = require('prompt');
var Word = require('./Word')

var array = ["Maddax", "Cesar", "Luna","Lus","Gomez"]

var randomNum = Math.floor((Math.random() * array.length) + 1)

randomNum = Math.floor((Math.random() * array.length) + 1)
randomWord = new Word(array[randomNum])


isGameOver = function() {
    var current =  randomWord.callDisplay()

    if (current === array[0]){
    console.log("Win")
    }else {
        takeUserGuess()
    }
}

keepPlayingQ = function () {
    prompt.get({
        properties: {
            keepPLaying: {
                description: ("Would you like to keep playing?")
            }
        }
    },function (err, result) {
            
        
        });

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