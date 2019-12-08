var prompt = require('prompt');
var Word = require('./Word')

var array = ["Jurassic Park", "You Can Do It", "You are the best", "You Are Great", "Best Dev Ever"]

var randomNum = Math.floor((Math.random() * array.length));
var randomWord = array[randomNum]
var chosenWord = new Word(randomWord)

var remainingGuesses = 10;

newGame = function () {
    console.log("-----New game initialized-----")
    randomNum = Math.floor((Math.random() * array.length));
    randomWord = array[randomNum]
    chosenWord = new Word(randomWord)
    remainingGuesses = 10;
    chosenWord.callDisplay()
    takeUserGuess()
    
}


isGameOver = function (current,guesses) {

    if (remainingGuesses === 1) {
        console.log("Looks like you ran out of guesses! That sucks")
        keepPlayingQ();
    }
    else if (guesses == false) {
        --remainingGuesses
        console.log("You have " + remainingGuesses + " left")
        takeUserGuess()
    } else {

        
        if (current === randomWord) {
            console.log("Congrats You Guessed all of them correctly!!!")
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
            console.log("Great Lets Play!")
            newGame()
            takeUserGuess()
        }else {
            console.log("-----------------")
            console.log("See you next time")
            console.log("-----------------")
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
    }, function (err, result) {
        chosenWord.callGuessFunc(result.letter)
        var current = chosenWord.callDisplay()
        isGameOver(current, chosenWord.callGuessFunc(result.letter))
    });

}

newGame()


//nail kit where you can do your own nails
//drill bit fake nails liquid 
//