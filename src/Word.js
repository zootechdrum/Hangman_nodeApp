var Letter = require("./Letter")
console.log(Letter("i"))


var userIn = process.argv[2];

function Word(w) {

    var arrayOfLetters = [];

    for(var i = 0; i < w.length; i++) {
        arrayOfLetters.push( new Letter(w[i]) )

    }
    console.log(arrayOfLetters)

}


Word(userIn)

