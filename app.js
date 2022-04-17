const playButton = document.querySelector('#play-button');
const grayOutContainer = document.querySelectorAll('#gray-out-container');
const buttons = document.querySelectorAll('.game-button');
const display = document.querySelector('#display-result');
const reset = document.querySelector('#reset-game');
const playerScoresDisplay = document.querySelector('#player-score-number')
const computerScoresDisplay = document.querySelector('#computer-score-number')

let playerScore = 0;
let computerScore = 0;
let play = false;

playButton.addEventListener('click', (e) => {
    play = true;
    grayOutContainer.forEach((element) => (element.style.display = 'none'));
    playButton.style.display = 'none';
});

buttons.forEach((button) => button.addEventListener('click', playRound));
reset.addEventListener('click', resetRound);

function computerPlay() {
    const play = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return play[random];
}

function playRound(e) {
    const playerSelection = e.currentTarget.value;
    const computerSelection = computerPlay();

    console.log('I play       : ' + e.currentTarget.value);
    console.log('computer play: ' + computerSelection);

    if (playerSelection === computerSelection) {
        display.textContent = `Draw! Both selected ${playerSelection} `;
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerScore++;
            display.textContent = 'You Win! Paper beats Rock';
        } else {
            computerScore++;
            display.textContent = 'You Lose! Rock beats Scissor';
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'scissors') {
            playerScore++;
            display.textContent = 'You Win! Scissors beats Paper';
        } else {
            computerScore++;
            display.textContent = 'You Lose! Paper beats Rock';
        }
    } else {
        if (playerSelection === 'rock') {
            playerScore++;
            display.textContent = 'You Win! Rock beat Scissor';
        } else {
            computerScore++;
            display.textContent = 'You Lose! Scissors beats Paper';
        }
    }

    console.log('player score: ' + playerScore);
    console.log('computer score: ' + computerScore);

    if (playerScore >= 5) {
        display.textContent = 'Congratulation! You Win 5 total scores.';
    } else if (computerScore >= 5) {
        display.textContent = 'Sorry! Computer Win 5 total scores, Git Good';
    }
}

function resetRound() {
    playerScore = 0;
    computerScore = 0;
    display.textContent = '';
}
