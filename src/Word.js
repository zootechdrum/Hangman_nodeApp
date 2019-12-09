var Letter = require("./Letter")

//This file depends on Letter.js


function Word(w) {

    var arrayOfLetters = [];

// pushes each letter to an array of letter 
// each letter is now an object
    for (var i = 0; i < w.length; i++) {
        arrayOfLetters.push(new Letter(w[i]))
    }
 // responsible for showing letter in terminal
    this.callDisplay = function () {
        var letter = '';
        var blankSpace;
        for (var j = 0; j < arrayOfLetters.length; j++) {
            letter += arrayOfLetters[j].display()

        }
        console.log(letter)
        return letter
    }
// Updates the boolean key if the user correctly guesses 
    this.callGuessFunc = function (s) {
        var result = false
        for (var k = 0; k < arrayOfLetters.length; k++) {
            arrayOfLetters[k].updateBool(s)
            if (arrayOfLetters[k].updateBool(s)) {
                result = true
            }
        }
        return result
    }
}


module.exports = Word

