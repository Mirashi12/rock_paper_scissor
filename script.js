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

function getPlayerSelection() {
    let playerChoice = prompt("Enter R for Rock, P for Paper, S for Scissor").toLowerCase();
    
    if (playerChoice == "r") {
        let playerMove = "Rock";
        console.log(`You chose ${playerMove}.`);
    } else if (playerChoice == "p") {
        let playerMove = "Paper";
        console.log(`You chose ${playerMove}.`);
    } else if (playerChoice == "s") {
        let playerMove = "Scissor";
        console.log(`You chose ${playerMove}.`);
    }  
}

console.log("Here is a simple (R)ock, (P)aper, (S)cissor game.");
getComputerChoice();
getPlayerSelection();