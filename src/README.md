# Hangman_nodeApp


## Description

THis is a hangman came powerd by node.js. This was a homework provided by trilogy to students.
This is great in introducing constructor functions and exporting modules to other files.

## Technologies 

1. Node.js
2. Prompt npm Package
3. Chalk npm package


## Important code snippets

The below code shows how I implemented validation using some build in features of the prompt npm package. 
It also shows how I used th NPM package "Chalk". Furthremore, if the user inputted more then one letter a console message 
would then be shown and continue call TakeUserGuess() again.

``` Javascript
function takeUserGuess() {
    prompt.get({
        properties: {
            letter: {
                description: "What is your letter",
                type:'string',
                required: true,
            }
        }
    }, function (err, result) {
        if (result.letter.length > 1) {
            console.log(chalk.green("Only one charechter") + chalk.red("is acceptable!!"))
            takeUserGuess()
        }else{
        checkGuess(result.letter)
        chosenWord.callGuessFunc(result.letter)
        var current = chosenWord.callDisplay()
        isGameOver(current, chosenWord.callGuessFunc(result.letter))
        }
    });

}
```

## Demo of working Node App
![Demo of working Project](./hangman_node.gif)

## Instructions on how to use.

1. Do a Git Clone of this Repo
2. After successful clone, switch to src folder in your terminal 
3. Run command node index.js
4. Start Playing!!
