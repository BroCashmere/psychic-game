
//Starting Game Status Counters
let wins = 0;
let losses = 0;
let lettersGuessed = [];
let guessesLeft = 10;
let compAnswer = [];

//Initial game setup

window.onload = function() {
    computerChoose()
    let possibleAnswer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    compAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
    console.log("Computer Chooses: " + compAnswer);
}

//User Guessing

document.onkeyup = function(event) {
    let userGuess = event.key;

    console.log("User Guesses: " + userGuess);

    
    if (userGuess.length !==1 || !isNaN(userGuess) || lettersGuessed.includes(userGuess)) {
        return;
    }
    
    else if (userGuess === compAnswer) {
        wins++;
        newRound();
        computerChoose();
        console.log("Computer Chooses: " + compAnswer);
        gameStats();
    }

    else if (userGuess !== compAnswer && guessesLeft > 0) {
        guessesLeft--;
        lettersGuessed.push(userGuess);
        if (guessesLeft === 0) {
            losses++
            newRound();
            computerChoose();
            console.log("Computer Chooses: " + compAnswer);
        }
        gameStats();
    }

    // else {
    //     losses++;
    //     newRound();
    //     computerChoose();
    //     console.log("Computer Chooses: " + compAnswer);
    //     gameStats();
    // }

};

//Function generating random answer

function computerChoose() {
    //Possible Letters
    let possibleAnswer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    compAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
}

//New Round Function

function newRound() {
    lettersGuessed = [];
    guessesLeft = 10;
    computerChoose();
    gameStats();
}


//Updating Game Stats Function

function gameStats() {
    
    let game = document.getElementById('game-status');

    game.innerHTML = `
      <p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Guesses Left: ${guessesLeft}</p>
      <p>Your Guesses so far: ${lettersGuessed}</p>
      `

}