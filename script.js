// Function that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
// @param none
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) //generates a random number from 0 to 2 (3 options)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// Function that plays a single round of Rock Paper Scissors.
// Returns a string that declares the winner of the round, e.g "You Lose! Paper beats Rock"
// @param playerSelection The player's inputted choice between either ‘Rock’, ‘Paper’ or ‘Scissors’.
// @param computerSelection The computer's generated choice between either ‘Rock’, ‘Paper’ or ‘Scissors’.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Draw! Try again - " + playerSelection + " cannot beat itself!";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    return "You lose! Paper beats Rock!";
                }
                else if (computerSelection == "scissors") {
                    return "You win! Rock beats Scissors!";
                }
                break;

            case "paper":
                if (computerSelection == "rock") {
                    return "You win! Paper beats Rock!";
                }
                else if (computerSelection == "scissors") {
                    return "You lose! Scissors beats Paper!";
                }
                break;

            case "scissors":
                if (computerSelection == "rock") {
                    return "You lose! Rock beats Scissors!";
                }
                else if (computerSelection == "paper") {
                    return "You win! Scissors beats Paper!";
                }
                break;
        }
    }
}

// // Function that plays a 5 round game, keeping score and reports a winner or loser at the end.
// function game()
// {
//     let playerWins = 0;
//     let computerWins = 0;

//     for (let i = 0; i < 5; i++)
//     {
//         let playerSelection = prompt("Enter your choice between either 'Rock', 'Paper' or 'Scissors': ");
//         const computerSelection = getComputerChoice();
//         console.log("The computer chose..." + computerSelection + "!");
//         let result = playRound(playerSelection, computerSelection);

//         if (result.includes("win"))
//         {
//             playerWins++;
//         }
//         else if (result.includes("lose"))
//         {
//             computerWins++;
//         }

//         console.log("Round " + (i+1) + ": " + result + "\n~ You: " + playerWins + " | Computer: " + computerWins);
//     }

//     if (playerWins == computerWins)
//     {
//         console.log("Draw! Wow...you are as good as a computer - Try again! :P")
//     }
//     else if (playerWins > computerWins)
//     {
//         console.log("Congratulations! You beat the computer! :D");
//     }
//     else
//     {
//         console.log("Uh oh...Sorry! The computer beat you - Try again! :(");
//     }
// }

const buttons = document.querySelectorAll('.playerSelection');
buttons.forEach(button => button.addEventListener('click', playRound));