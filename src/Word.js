var Letter = require("./Letter")




function Word(w) {

    var arrayOfLetters = [];


    for (var i = 0; i < w.length; i++) {
        arrayOfLetters.push(new Letter(w[i]))
    }
    console.log(arrayOfLetters)

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
        for (var k = 0; k < arrayOfLetters.length; k++) {
            arrayOfLetters[k].updateBool(s)
            if (arrayOfLetters[k].updateBool(s)) {
                result = true
            }
        }
    }
}


module.exports = Word

