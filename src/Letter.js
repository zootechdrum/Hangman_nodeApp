console.log("this loaded")

function Letter(letter) {

    this.letter = letter
    this.guessedCorrectly = true;

    this.display = function(letter) {

        if(this.guessedCorrectly) {
            return this.letter;
        }else {
            return ' _ '
        }
        console.log(result)
    }

    this.updateBool = function(letter) {
        if (this.letter === letter) {
            console.log("matched")
            this.guessedCorrectly = true
        }else {
            return false
        }
    }
}

module.exports = Letter