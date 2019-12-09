//Used in Word.js

function Letter(letter) {



    this.letter = letter
    this.guessedCorrectly = false;

    //If the letter is white space automatically 
    // change guessedCorrectly to true neither a letter or 
    //underscore will show
    if(this.letter === ' ') {
        this.guessedCorrectly = true
    }
    //handles what to display
    this.display = function(letter) {

     if(this.guessedCorrectly) {
            return this.letter;
        }else {
            return ' _ '
        }
        console.log(result)
    }
//this is called from word file and updates the boolean and returns true or false if something was 
//changed
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