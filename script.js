let playerMove;
let computerMove;

function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom == 0) {
        computerMove = "Rock";
        console.log(`The computer chose ${computerMove}.`);
    } else if (computerRandom == 1) {
        computerMove = "Paper";
        console.log(`The computer chose ${computerMove}.`);
    } else if (computerRandom == 2) {
        computerMove = "Scissor";
        console.log(`The computer chose ${computerMove}.`);
    }
}

function getPlayerSelection() {
    let playerChoice = prompt("Enter R for Rock, P for Paper, S for Scissor").toLowerCase();
    
    if (playerChoice == "r") {
        playerMove = "Rock";
        console.log(`You chose ${playerMove}.`);
    } else if (playerChoice == "p") {
        playerMove = "Paper";
        console.log(`You chose ${playerMove}.`);
    } else if (playerChoice == "s") {
        playerMove = "Scissor";
        console.log(`You chose ${playerMove}.`);
    }  else {
        console.log("This is not a valid input.")
    }
}

function resolveGame() {
    if (computerMove === "Rock" && playerMove === "Paper") {
        return "You win!";
    } else if (computerMove === "Rock" && playerMove === "Scissor") {
        return "The computer wins!";
    } else if (computerMove === "Paper" && playerMove === "Rock") {
        return "The computer wins!";
    } else if (computerMove === "Paper" && playerMove === "Scissor") {
        return "You win!";
    } else if (computerMove === "Scissor" && playerMove === "Rock") {
        return "You win!";
    } else if (computerMove === "Scissor" && playerMove === "Paper") {
        return "The computer wins!"
    } else if (computerMove === playerMove) {
        return "This is a Draw!";
    } else {
        return "The game could not be played, enter a valid input."
    }
}

console.log("Here is a simple (R)ock, (P)aper, (S)cissor game.");

getPlayerSelection();
getComputerChoice();
console.log(resolveGame());