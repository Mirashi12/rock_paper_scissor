function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom == 0) {
        let computerChoice = "Rock";
        console.log(`The computer chose ${computerChoice}.`);
    } else if (computerRandom == 1) {
        let computerChoice = "Paper";
        console.log(`The computer chose ${computerChoice}.`);
    } else if (computerRandom == 2) {
        let computerChoice = "Scissor";
        console.log(`The computer chose ${computerChoice}.`);
    }
}

console.log("Here is a simple (R)ock, (P)aper, (S)cissor game.");
getComputerChoice();