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
    //test / debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}

//MAIN PROCESS
//============================================================
startGame();