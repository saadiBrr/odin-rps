let computerScore = 0;
let humanScore = 0;
let computerSelection;
let humanSelection;
let roundsPlayed = 0;

function getComputerChoice() {

    let pick = Math.random();

    if (pick < 0.334) {
        return "rock";
    }
    else if (pick < 0.666) {
        return "paper";
    }

    else if (pick > 0.666) {
        return "scissors";
    }
}

function getHumanChoice() {

    let pick;

    while (true) {
        pick = prompt("Pick between Rock, Paper, and Scissors")

        if (pick === null) {
            alert("Please enter your choice");
            continue;
        }

        pick = pick.toLowerCase();

        if (pick != 'rock' && pick != 'paper' && pick != 'scissors') {
            alert("Invalid input. Please pick from Rock, Paper, or Scissors.");
        }
        else break;
    }
    return pick;

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        // Dynamically construct the tie message
        console.log(`It's a tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} meets ${computerChoice}.`);
        return;
    }

    if (humanChoice == "rock") {
        if (computerChoice != 'rock' && computerChoice != 'paper') {
            humanScore++;
            console.log(`Rock crushes scissors. You win this round! The score is ${humanScore}-${computerScore}.`);
        } else {
            computerScore++;
            console.log(`Paper covers rock. You lose this round! The score is ${humanScore}-${computerScore}.`);
        }
    }

    if (humanChoice == "paper") {
        if (computerChoice != 'paper' && computerChoice != 'scissors') {
            humanScore++;
            console.log(`Paper covers rock. You win this round! The score is ${humanScore}-${computerScore}.`);
        }
        else {
            computerScore++;
            console.log(`Scissors cut paper. You lose this round! The score is ${humanScore}-${computerScore}.`);
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice != 'scissors' && computerChoice != 'rock') {
            humanScore++;
            console.log(`Scissors cut paper. You win this round! The score is ${humanScore}-${computerScore}.`);
        }
        else {
            computerScore++;
            console.log(`Rock crushes scissors. You lose this round! The score is ${humanScore}-${computerScore}.`);
        }
    }
    roundsPlayed++;
}



// function playGame(count) {

//     while (count > roundsPlayed) {

//         const computerSelection = getComputerChoice();
//         const humanSelection = getHumanChoice();

//         if (humanSelection === computerSelection) {
//             console.log(`It's a tie! ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)} meets ${computerSelection}.`);
//             continue;
//         }

//         playRound(humanSelection, computerSelection);
//     }
//     if (count == roundsPlayed) {
//         let winner = humanScore > computerScore ? "You" : "Computer";
//         let winOrWins = winner == "You" ? "win" : "wins";
//         console.log(`You won ${humanScore} rounds, computer score ${computerScore}. ${winner} ${winOrWins}.`);
//         alert(`You won ${humanScore} rounds, computer score ${computerScore}. ${winner} ${winOrWins}.`);
//     }
// }