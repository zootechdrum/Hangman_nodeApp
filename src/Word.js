var Letter = require("./Letter")




function Word(w) {
    console.log(w)

    var arrayOfLetters = [];

    
    for(var i = 0; i < w.length; i++) {
        arrayOfLetters.push(new Letter(w[i]))
    }

    this.callDisplay = function() {
        var letter = ''
        for(var j = 0; j < arrayOfLetters.length; j++) {
            letter += arrayOfLetters[j].display()
            
        }
        console.log(letter)
        return letter
    }

    this.callGuessFunc = function(s) {
        for(var k = 0; k < arrayOfLetters.length; k++) {
             arrayOfLetters[k].updateBool(s)
        }
    }
}


module.exports = Word

