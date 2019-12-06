console.log("this loaded")

function Letter(letter) {
    this.letter = letter;
    this.guessedCorrectly = false;

    this.display = function(letter) {
        if( this.letter === letter   && this.guessedCorrectly === false) {
            return letter
        }else {
            return "_"
        }
    }

    this.upadateBool = function(letter) {
        
        if (this.letter === letter) {
            this.guessedCorrectly = true
        }
    }
}

module.exports = Letter