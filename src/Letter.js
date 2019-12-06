console.log("this loaded")

function Letter(letter) {
    this.letter = letter;
    this.attemptLetter = false;

    this.guessedLetter = function(letter) {
        if( this.letter === false ) {
            return letter
        }else {
            return "_"
        }
    }


}

module.exports = Letter