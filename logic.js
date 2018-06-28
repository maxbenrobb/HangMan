//GLOBAL VARIABLES
//============================================================
//arrays and variables for data
var wordOptions = ["apple", "banana", "grape", "strawberry", "orange"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS
//============================================================

function startGame () {
    selectedWord =wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // populate blanks and successes with right number of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_")
    }

    // change HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //test / debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

//MAIN PROCESS
//============================================================
startGame();