// Function that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
// @param none
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) //generates a random number from 0 to 2 (3 options)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function that plays a single round of Rock Paper Scissors.
// Returns a string that declares the winner of the round, e.g "You Lose! Paper beats Rock"
// @param playerSelection The player's inputted choice between either ‘Rock’, ‘Paper’ or ‘Scissors’.
// @param computerSelection The computer's generated choice between either ‘Rock’, ‘Paper’ or ‘Scissors’.
function playRound(playerSelection, computerSelection) {
    latestComputerChoice = computerSelection;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Draw! Try again - " + playerSelection + " cannot beat itself!";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    computerScore++;
                    return "You lose! Paper beats Rock!";
                }
                else if (computerSelection == "scissors") {
                    playerScore++;
                    return "You win! Rock beats Scissors!";
                }
                break;

            case "paper":
                if (computerSelection == "rock") {
                    playerScore++;
                    return "You win! Paper beats Rock!";
                }
                else if (computerSelection == "scissors") {
                    computerScore++;
                    return "You lose! Scissors beats Paper!";
                }
                break;

            case "scissors":
                if (computerSelection == "rock") {
                    computerScore++;
                    return "You lose! Rock beats Scissors!";
                }
                else if (computerSelection == "paper") {
                    playerScore++;
                    return "You win! Scissors beats Paper!";
                }
                break;
        }
    }
}

// Function that will update the results displayed on the page.
function updateScores(result) {
    document.getElementById("outcome").innerHTML = `The computer chose: ${latestComputerChoice}<br>` + result;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;

    if (computerScore === 5) {
        document.getElementById("outcome").innerHTML += "<br>Sorry, the computer beat you! Please try again by refreshing :(";
        disableButtons();
    } else if (playerScore === 5) {
        document.getElementById("outcome").innerHTML += "<br>Congratulations, you beat the computer! Well done :D";
        disableButtons();
    }
}

// Function that disables player selection buttons.
function disableButtons() {
    const buttons = document.querySelectorAll(".playerSelectionButton");
    buttons.forEach(button => {
        button.classList.add("disabled");
    });
}

let latestComputerChoice = "";
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('.playerSelectionButton');

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.add('pressed');
    updateScores(playRound(button.id, getComputerChoice()));
}));

buttons.forEach(button => button.addEventListener('transitionend', () => {
    button.classList.remove('pressed');
}));