var prompt = require('prompt');
var Word = require('./Word')
const chalk = require('chalk');

var array = ["Jurassic Park", "You Can Do It", "You are the best", "You Are Great", "Best Dev Ever"]

var randomNum = Math.floor((Math.random() * array.length));
var randomWord = array[randomNum]
var chosenWord = new Word(randomWord)
var alreadyGuessed = []

var remainingGuesses = 10;

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

function checkGuess(letter) {

    if( alreadyGuessed.length === 0) {
        alreadyGuessed.push(letter)
       
    }else{
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
                description: "What is your letter",
                type:'string',
                required: true,
            }
        }
    }, function (err, result) {
        if (result.letter.length > 1) {
            console.log(chalk.green("Only one charechter") + chalk.red("is acceptable!!"))
            takeUserGuess()
        }else{
        checkGuess(result.letter)
        chosenWord.callGuessFunc(result.letter)
        var current = chosenWord.callDisplay()
        isGameOver(current, chosenWord.callGuessFunc(result.letter))
        }
    });

}


newGame()


//nail kit where you can do your own nails
//drill bit fake nails liquid 
//