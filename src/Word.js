var Letter = require("./Letter")
console.log(Letter("i"))


var userIn = process.argv[2];

function Word(w) {

    var arrayOfLetters = [];

    for(var i = 0; i < w.length; i++) {
        arrayOfLetters.push( new Letter(w[i]) )

    }

    this.callDisplay = function(s) {
        for( var j = 0; j < arrayOfLetters; j++) {
            arrayOfLetters[j].display
        }
    }

    this.callGuessFunc = function() {
        for(var k = 0; k < arrayOfLetters; k++) {
            arrayOfLetters[k].guessedLetter()
        }
    }
    

}


Word(userIn)

