console.log("this loaded")

function Letter(letter) {

    this.letter = letter
    this.guessedCorrectly = false;

    this.display = function(letter) {

        if(this.guessedCorrectly) {
            return this.letter;
        }else {
            return ' _ '
        }
        console.log(result)
    }

    this.updateBool = function(letter) {
        if (this.letter.toLowerCase() === letter.toLowerCase()) {
            this.guessedCorrectly = true
            return true
        }else {
            return false
        }
    }
}

module.exports = Letter