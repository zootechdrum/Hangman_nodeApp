//This file only depends on the Word.js file
var prompt = require('prompt');
var Word = require('./Word')
const chalk = require('chalk');

var array = ["Jurassic Park", "You Can Do It", "You are the best", "You Are Great", "Best Dev Ever"]

var randomNum = Math.floor((Math.random() * array.length));
var randomWord = array[randomNum]
var chosenWord = new Word(randomWord)
var alreadyGuessed = []

var remainingGuesses = 10;

//Initiates new game when file is run
newGame = function () {
    console.log(chalk.green("----- ") + chalk.red("New Game") + chalk.green(" Initialized") + chalk.red(" -----"))
      randomNum = Math.floor((Math.random() * array.length));
     randomWord = array[randomNum]
     chosenWord = new Word(randomWord)
     remainingGuesses = 10;
     alreadyGuessed = []
    chosenWord.callDisplay()
    takeUserGuess()

    
}

// checks if the current displayed word
// matches the actual word chosen
// also is responsible for decreaing guess count
isGameOver = function (current,guesses) {


    if (remainingGuesses === 1) {
        console.log(chalk.red("Looks ") + chalk.green(" like you ran out ") + chalk.red(" of guesses! That sucks "))
        console.log(chalk.red("-----------------"))
        console.log(chalk.green("The word to guess was ")  + chalk.red(randomWord))
        keepPlayingQ();
    }
     if (guesses === false) {
        console.log()
        --remainingGuesses
        console.log("You have " + remainingGuesses + " left")
        takeUserGuess()
    } else {

        
        if (current === randomWord) {
            console.log(chalk.red("Congrats You Guessed all of them correctly!!!"))
            keepPlayingQ()
        } else {
            takeUserGuess()
        }
    }
}

//Checks if the user wants to keep playing
keepPlayingQ = function () {
    prompt.get({
        properties: {
            keepPLaying: {
                description: ("Would you like to keep playing? Y/N")
            }
        }
    }, function (err, result) {
        if (result.keepPLaying.toLowerCase() == "y") {
            console.log(chalk.red("Great") + chalk.green("Lets") + chalk.red("Play!"))
            newGame()
            takeUserGuess()
        }else {
            console.log(chalk.green("-----------------"))
            console.log(chalk.red("See you next time"))
            console.log(chalk.green("-----------------"))
        }

    });
}


//Checks if the user guess 
function checkGuess(letter) {
    if( alreadyGuessed.length === 0) {
        alreadyGuessed.push(letter)
       
    }else{
        //iterates over the array and checks if
        //the letter the user typed in exists in array.
        for( var i = 0; i < alreadyGuessed.length; i++) {
            if( alreadyGuessed[i] === letter) {
                console.log(chalk.red("Already guessed"))
            }
        }
    }    
}


function takeUserGuess() {
    prompt.get({
        properties: {
            letter: {
                //Prompt's user for the letter
                description: "What is your letter",
                type:'string',
                required: true,
                message: "You must enter a letter to play this game"
            }
        }
    }, function (err, result) {
        //Shows user message if more than one letter is typed
        if (result.letter.length > 1) {
            console.log(chalk.green("Only one charechter") + chalk.red("is acceptable!!"))
            takeUserGuess()
        }else{
        //checks user guess then checks if the game is over
        checkGuess(result.letter)
        chosenWord.callGuessFunc(result.letter)
        var current = chosenWord.callDisplay()
        isGameOver(current, chosenWord.callGuessFunc(result.letter))
        }
    });

}

//Initiates game
newGame()


//nail kit where you can do your own nails
//drill bit fake nails liquid 
//