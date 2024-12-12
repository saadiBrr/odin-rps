function getComputerChoice() {

    let pick = Math.random()

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

console.log(getComputerChoice())