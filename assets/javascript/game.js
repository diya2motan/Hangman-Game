
var gameWords = ['tiger', 'flower', 'apple', 'potatoes'];
var wins = 0;
var guessesRemaining = 12;
var numberOfGuesses = 12;
var letterGuessed;
var lettersAlreadyGuessed = [];
var currentWord = "";
// var currentWordLetterIndex;
// var numberOfcurrentWordLetters;
var lettersGuessedAndCorrect = [];
var currentWordDashes = [];

document.onkeyup = function(event) {
    var sound = new Audio("assets/music/bensound-ukulele.mp3");
    sound.play();
    resetTheGame();
    // document.querySelector("#getStarted").innerHTML = "Game Started";
    // document.querySelector("#numberOfGuesses").innerHTML = numberOfGuesses;

    // currentWord = getRandomWord();
    // for(var i=0; i<currentWord.length;i++){
    //     currentWordDashes.push(" _ " + "  ");
    // }
    // document.querySelector("#currentWord").innerHTML = currentWordDashes.join(" ");
    document.onkeyup = function(event) {
        // if(currentWordDashes.){

        // }
        console.log(currentWord);
        decideWinner();
        letterGuessed = event.keyCode;
        if ((letterGuessed >= 65 && letterGuessed <= 90)) {
            letterGuessed = String.fromCharCode((96 <= letterGuessed && letterGuessed <= 105) ? letterGuessed-48 : letterGuessed).toLowerCase();;
            //console.log(lettersGuessedAndCorrect.length + "--" + currentWord.length);
            if (lettersGuessedAndCorrect.length === currentWord.length) {
                resetTheGame();
                currentWord = getRandomWord();
                for (var i = 0; i < currentWord.length; i++) {
                    currentWordDashes.push(" _ ");
                }
                document.querySelector("#currentWord").innerHTML = currentWordDashes.join(" ");
            }


            if (!checkTheLetterGuessedIfAlreadyGuessed(lettersAlreadyGuessed, letterGuessed)) {
                lettersAlreadyGuessed.push(letterGuessed);
                guessesRemaining--;
                document.querySelector("#numberOfGuesses").innerHTML = guessesRemaining;
                document.querySelector("#lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed.join(" ");

                if (checkTheLetterGuessedIfExistsInCurrentWord(currentWord, letterGuessed)) {
                    lettersGuessedAndCorrect.push(letterGuessed);
                    updateTheAnswer(currentWord, letterGuessed);
                    document.querySelector("#currentWord").innerHTML = currentWordDashes.join(" ");


                }
            }
            //decideWinner();
            if (guessesRemaining < 0) {
                resetTheGame();
            }
            // console.log(currentWordDashes.join(" "));
            console.log(currentWord);
            decideWinner();
        }
    }




}

function decideWinner() {
    // console.log(currentWordDashes.join("").toString());
    // console.log(currentWord);
    // console.log(lettersAlreadyGuessed);
    // console.log(lettersGuessedAndCorrect);
    if ((currentWordDashes.join("").toString() === currentWord) && (guessesRemaining >= 0)) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        //resetTheGame();
        if (currentWord === "tiger") {
            var img = document.getElementById("guessImage");
            img.src = "assets/images/tiger.jpg"
        } else if (currentWord === "apple") {
            var img = document.getElementById("guessImage");
            img.src = "assets/images/apple.jpg"
        } else if (currentWord === "flower") {
            var img = document.getElementById("guessImage");
            img.src = "assets/images/flower.jpg"
        } else {
            var img = document.getElementById("guessImage");
            img.src = "assets/images/potatoes.jpg"
        }
        resetTheGame();

    }
}

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90));
}

function updateTheAnswer(currentWord, letterGuessed) {

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letterGuessed)
            currentWordDashes[i] = currentWord[i];
    }
}

function getRandomWord() {
    currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    // if(currentWord === "tiger"){

    // }
    return currentWord;
}

function checkTheLetterGuessedIfAlreadyGuessed(lettersAlreadyGuessed, letterGuessed) {
    for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
        if (letterGuessed === lettersAlreadyGuessed[i]) {
            //console.log(i);
            return true;
        }
    }
}

function checkTheLetterGuessedIfExistsInCurrentWord(currentWord, letterGuessed) {
    for (var i = 0; i < currentWord.length; i++) {
        if (letterGuessed === currentWord[i]) {
            return true;
        }

    }
}

function resetTheGame() {
    //check if the array is finished
    // if(){
    //      wins=0;
    // }
    guessesRemaining = 12;
    lettersAlreadyGuessed = [];
    lettersGuessedAndCorrect = [];
    currentWordDashes = [];

    document.querySelector("#numberOfGuesses").innerHTML = numberOfGuesses;
    document.querySelector("#lettersAlreadyGuessed").innerHTML = "";
    document.querySelector("#currentWord").innerHTML = currentWordDashes.join(" ");
    document.querySelector("#getStarted").innerHTML = "Game Started";
    document.querySelector("#numberOfGuesses").innerHTML = numberOfGuesses;

    currentWord = getRandomWord();
    for (var i = 0; i < currentWord.length; i++) {
        currentWordDashes.push(" _ ");
    }
    document.querySelector("#currentWord").innerHTML = currentWordDashes.join(" ");


}

function getTheIndexOfTheLetter(letterGuessed, currentWord) {
    return currentWord.indexOf(letterGuessed);
}
