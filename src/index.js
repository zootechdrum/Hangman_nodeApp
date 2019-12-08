var prompt = require('prompt');
var Word = require('./Word')

var array = ["Maddax", "Cesar", "Luna","Lus","Gomez"]

var randomNum = Math.floor((Math.random() * array.length));
var randomWord = array[randomNum]
var chosenWord = new Word(randomWord)

var remainingGuesses = 10;

newGame = function() {
     randomNum = Math.floor((Math.random() * array.length));
     randomWord = array[randomNum]
     chosenWord = new Word(randomWord)  
     remainingGuesses = 10;
}


isGameOver = function(guesses) {

    if(remainingGuesses === 1) {
        console.log("Looks like you ran out of guesses! That sucks")
        keepPlayingQ();
    }
    else if(guesses == false) {
        --remainingGuesses 
        console.log("You have " + remainingGuesses + " left")
        takeUserGuess()
    }else{

    var current =  chosenWord.callDisplay()
    if (current === randomWord){

        keepPlayingQ()
    }else {
        takeUserGuess()
    }
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
                newGame()
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
        console.log(chosenWord.callGuessFunc(result.letter))
         chosenWord.callGuessFunc(result.letter)
       chosenWord.callDisplay()
       isGameOver(chosenWord.callGuessFunc(result.letter))
    });

}


chosenWord.callDisplay()
takeUserGuess()

//nail kit where you can do your own nails
//drill bit fake nails liquid 
//