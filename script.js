let computerScore = 0;
let humanScore = 0;
let computerSelection;
let humanSelection;
let roundsPlayed = 1;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const humanScoreOutput = document.getElementById('humanScore');
const computerScoreOutput = document.getElementById('computerScore');
const roundsPlayedOutput = document.getElementById('roundsPlayed');

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

    if (humanScore < 5 && computerScore < 5) {

        if (humanChoice === computerChoice) {
            // Dynamically construct the tie message
            output.innerText = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} meets ${computerChoice}.
        It's a tie!`;
            return;
        }

        if (humanChoice == "rock") {
            if (computerChoice != 'rock' && computerChoice != 'paper') {
                humanScore++;
                output.innerText = `Your rock crushes the scissors
            You win this round!`;
            } else {
                computerScore++;
                output.innerText = `Paper covers your rock
            You lose this round!`;
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice != 'paper' && computerChoice != 'scissors') {
                humanScore++;
                output.innerText = `Your paper covers the rock
            You win this round!`;
            }
            else {
                computerScore++;
                output.innerText = `Scissors cut your paper
            You lose this round!`;
            }
        }
        if (humanChoice == "scissors") {
            if (computerChoice != 'scissors' && computerChoice != 'rock') {
                humanScore++;
                output.innerText = `Your scissors cut the paper
            You win this round!`;
            }
            else {
                computerScore++;
                output.innerText = `Rock crushes your scissors
            You lose this round!`;
            }
        }

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                output.innerText = `\nGame over. You win!`;
            } else {
                output.innerText = `\nGame over. You lost!`;
            }
        }

        roundsPlayed++;
        humanScoreOutput.innerText = humanScore;
        computerScoreOutput.innerText = computerScore;
        roundsPlayedOutput.innerText = `Round ${roundsPlayed}`;
        // } else if (humanScore >= 5 || computerScore >= 5) {
        // if (humanScore > computerScore) {
        //     output.innerText += `\nGame over. You win!`;
        // } else {
        //     output.innerText += `\nGame over. You lost!`;
        // }
    }
}


rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

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