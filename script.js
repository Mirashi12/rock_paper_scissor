let playerMove;
let computerMove;
let h1_score = document.createElement('h1');
let div_display = document.querySelector('#score-display');

function resolveGame() {
    playerMove = this.playerMove;
    console.log(playerMove);

    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom == 0) {
        computerMove = "Rock";
    } else if (computerRandom == 1) {
        computerMove = "Paper";
    } else if (computerRandom == 2) {
        computerMove = "Scissor";
    }

    if (computerMove === "Rock" && playerMove === "Paper") {
        h1_score.textContent= "You win!";
    } else if (computerMove === "Rock" && playerMove === "Scissor") {
        h1_score.textContent= "The computer wins!";
    } else if (computerMove === "Paper" && playerMove === "Rock") {
        h1_score.textContent= "The computer wins!";
    } else if (computerMove === "Paper" && playerMove === "Scissor") {
        h1_score.textContent= "You win!";
    } else if (computerMove === "Scissor" && playerMove === "Rock") {
        h1_score.textContent= "You win!";
    } else if (computerMove === "Scissor" && playerMove === "Paper") {
        h1_score.textContent= "The computer wins!"
    } else if (computerMove === playerMove) {
        h1_score.textContent= "This is a Draw!";
    } else {
        h1_score.textContent= "The game could not be played, enter a valid input."
    };

    div_display.appendChild(h1_score);
}

const btn_rock = document.getElementById("btn-rock");
btn_rock.playerMove = 'Rock';
btn_rock.addEventListener('click', resolveGame);

const btn_paper = document.getElementById("btn-paper");
btn_paper.playerMove = 'Paper';
btn_paper.addEventListener('click', resolveGame);

const btn_scissor = document.getElementById("btn-scissor");
btn_scissor.playerMove = 'Scissor';
btn_scissor.addEventListener('click', resolveGame);