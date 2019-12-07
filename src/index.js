var prompt = require('prompt');
var Word = require('./Word')

var array = ["Maddax", "Cesar", "Luna","Lus","Gomez"]

var randomNum = Math.floor((Math.random() * array.length) + 1)
var randomWord = array[randomNum]
var chosenWord = new Word(randomWord)


isGameOver = function() {

    var current =  chosenWord.callDisplay()


    if (current === randomWord){

        keepPlayingQ()
    }else {
        takeUserGuess()
    }
}

keepPlayingQ = function () {
    prompt.get({
        properties: {
            keepPLaying: {
                description: ("Would you like to keep playing? Y/N")
            }
        }
    },function (err, result) {
            if (result.keepPLaying == "Y"){
                console.log("Great Lets Play!")
                takeUserGuess()
            }
        
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
       chosenWord.callGuessFunc(result.letter)
       chosenWord.callDisplay()
       isGameOver()
    });

}

takeUserGuess()

//nail kit where you can do your own nails
//drill bit fake nails liquid 
//