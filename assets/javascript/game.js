
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
    Answer = compAnswer.toUpperCase();
    console.log("Computer Chooses: " + Answer);
}

//User Guessing

document.onkeyup = function(event) {
    let userGuess = event.key;
    Guess = userGuess.toUpperCase();
    console.log("User Guesses: " + Guess);

    
    if (Guess.length !==1 || !isNaN(Guess) || lettersGuessed.includes(Guess)) {
        return;
    }
    
    else if (Guess === Answer) {
        win();
        wins++;
        newRound();
        computerChoose();
        console.log("Computer Chooses: " + Answer);
        gameStats();
    }

    else if (Guess !== Answer && guessesLeft > 0) {
        guessesLeft--;
        lettersGuessed.push(Guess);
        if (guessesLeft === 0) {
            losses++
            newRound();
            computerChoose();
            console.log("Computer Chooses: " + Answer);
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
    Answer = compAnswer.toUpperCase();
}

//New Round Function

function newRound() {
    lettersGuessed = [];
    guessesLeft = 10;
    computerChoose();
    gameStats();
}

//Win Alert

function win() {
    alert("You guessed it, " + Answer + "!");
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