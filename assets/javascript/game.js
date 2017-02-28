var gameWords = ['tiger', 'flower', 'apple', 'potatoes'];
var wins = 0;
var guessesRemaining = 12;
var numberOfGuesses = 12;
var letterGuessed;
var lettersAlreadyGuessed = [];
var currentWord="";
var currentWordLetterIndex;
var numberOfcurrentWordLetters;
var lettersGuessedAndCorrect = [];
var currentWordDashes = [];

document.onkeyup = function(event) {
	resetTheGame();
    document.querySelector("#getStarted").innerHTML = "Game Started";
    document.querySelector("#numberOfGuesses").innerHTML = numberOfGuesses;
    
    currentWord = getRandomWord();
    for(var i=0; i<currentWord.length;i++){
        currentWordDashes.push("_" + " ");
    }
    document.querySelector("#currentWord").innerHTML = currentWordDashes;
    document.onkeyup = function(event) {
    	// if(currentWordDashes.){

    	// }
    	if(lettersGuessedAndCorrect.length === currentWord.length){
           resetTheGame();
           currentWord = getRandomWord();
           for(var i=0; i<currentWord.length;i++){
           		currentWordDashes.push("_" + " ");
           }
           document.querySelector("#currentWord").innerHTML = currentWordDashes;
        }
        letterGuessed = event.key;
        //console.log(letterGuessed);
        console.log("-----before-----");
        console.log(letterGuessed);
        
        console.log(currentWord);
        console.log(lettersAlreadyGuessed);

        if(!checkTheLetterGuessedIfAlreadyGuessed(lettersAlreadyGuessed,letterGuessed)){
            lettersAlreadyGuessed.push(letterGuessed);
            guessesRemaining--;
            if(checkTheLetterGuessedIfExistsInCurrentWord(currentWord,letterGuessed)){
            //console.log(currentWord);
            //console.log(letterGuessed);
            console.log("exists in current word");
            lettersGuessedAndCorrect.push(letterGuessed);
            updateTheAnswer(currentWord,letterGuessed);
            //guessesRemaining--;
            document.querySelector("#currentWord").innerHTML = currentWordDashes;
        	document.querySelector("#numberOfGuesses").innerHTML = guessesRemaining;
        	document.querySelector("#lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
        

        	}
        }
        //document.querySelector("#numberOfGuesses").innerHTML = numberOfGuesses;
        // console.log("-----after-----");
        // console.log(letterGuessed);
        
        // console.log(currentWord);
        // console.log(lettersAlreadyGuessed);
        // console.log(lettersGuessedAndCorrect);
        // console.log(getTheIndexOfTheLetter(letterGuessed,currentWord));





        //console.log(lettersAlreadyGuessed);
        // checkTheLetterGuessedIfExistsInCurrentWord(letterGuessed);

        // for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
        //     if (letterGuessed === lettersAlreadyGuessed[i]) {
        //         break;
        //     } else {
        //         //lettersAlreadyGuessed.push(letterGuessed);
        //         console.log(letterGuessed);
        //         guessesRemaining--;
        //         document.querySelector("#numberOfGuesses").innerHTML = guessesRemaining;
        //         document.querySelector("#lettersAlreadyGuessed").innerHTML = lettersAlreadyGuessed;
        //     }
        // }
        // if (guessesRemaining === 0) {
        //     resetTheGame();
        // }
    }

}

// document.onkeyup = function(event) {
//     for (var i = 0; i < numberOfGuesses; i++) {

//             letterGuessed = event.key;
//             console.log(letterGuessed);
//             guessesRemaining--;
//             console.log(guessesRemaining);
//             console.log(numberOfGuesses);
//             console.log(i);
//             document.querySelector("#numberOfGuesses").innerHTML = guessesRemaining;
//             if (guessesRemaining === 0) {
//             resetEverything();


//     }

// }
// }
function updateTheAnswer(currentWord,letterGuessed){

	for(var i=0; i<currentWord.length;i++){
		if(currentWord[i] === letterGuessed)
			currentWordDashes[i] = currentWord[i];
	}
}

function getRandomWord(){
    currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    // if(currentWord === "tiger"){

    // }
    return currentWord;
}

function checkTheLetterGuessedIfAlreadyGuessed(lettersAlreadyGuessed,letterGuessed) {
    for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
        if (letterGuessed === lettersAlreadyGuessed[i]) {
            //console.log(i);
            return true;
        }
    }
}

function checkTheLetterGuessedIfExistsInCurrentWord(currentWord,letterGuessed) {
    for(var i = 0; i < currentWord.length;i++){
        if(letterGuessed === currentWord[i]){
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
    

}

function getTheIndexOfTheLetter(letterGuessed,currentWord){
	return currentWord.indexOf(letterGuessed);
}
