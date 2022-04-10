let random;
function computerPlay() {
    const play = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * 3);
    return play[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `Draw! Both selected ${playerSelection} `;
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
			winTotal++;
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Rock beats Scissor";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
			winTotal++;
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Paper beats Rock";
        }
    } else {
        if (playerSelection === "rock") {
			winTotal++;
            return "You Win! Rock beat Scissor";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
}

function game(){
	for (let i=0;i<5;i++){
		computerSelection = computerPlay();
		console.log(playRound(playerSelection,computerSelection))
	}
	console.log("You win "+winTotal+" times")
}

const playerSelection = prompt("Rock, Paper, Scissors ?");
let computerSelection;
let winTotal = 0;
game();