var Letter = require("./Letter")




function Word(w) {

    var arrayOfLetters = [];


    for (var i = 0; i < w.length; i++) {
        arrayOfLetters.push(new Letter(w[i]))
    }
 
    this.callDisplay = function () {
        var letter = '';
        var blankSpace;
        for (var j = 0; j < arrayOfLetters.length; j++) {
            letter += arrayOfLetters[j].display()

        }
        console.log(letter)
        return letter
    }

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

