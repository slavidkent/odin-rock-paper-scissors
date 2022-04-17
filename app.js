// document Selection
const playButton = document.querySelector('#play-button');
const grayOutContainer = document.querySelectorAll('#gray-out-container');
const buttons = document.querySelectorAll('.game-button');
const display = document.querySelector('#display-result');
const reset = document.querySelector('#reset-button');
const choiceDisplay = document.querySelectorAll('.display-choice');
const playerScoresDisplay = document.querySelector('#player-score-number');
const computerScoresDisplay = document.querySelector('#computer-score-number');
const drawNumberDisplay = document.querySelector('#total-draw-number');
const roundNumberDisplay = document.querySelector('#total-round-number');

// variable
let roundNumber = 0;
let drawNumber = 0;
let playerScore = 0;
let computerScore = 0;
let play = false;

// event
playButton.addEventListener('click', playClicked);
buttons.forEach((button) => button.addEventListener('click', playRound));
// reset.addEventListener('click', resetRound);

// function
// click play button
function playClicked() {
    play = true;
    grayOutContainer.forEach((element) => (element.style.display = 'none'));
    playButton.style.display = 'none';
}

// random rock paper scissor generator
function computerPlay() {
    const play = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return play[random];
}

// core game play mechanic
function playRound(e) {
    const playerSelection = e.currentTarget.value;
    const computerSelection = computerPlay();
    roundNumber += 1;

    console.log('I play       : ' + e.currentTarget.value);
    console.log('computer play: ' + computerSelection);

    displaySelection(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        drawNumber += 1;
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

    console.log('Round Number:   ' + roundNumber);
    console.log('player score:   ' + playerScore);
    console.log('computer score: ' + computerScore);
    console.log('Draw Amount:    ' + drawNumber);

    roundNumberDisplay.textContent = roundNumber;
    playerScoresDisplay.textContent = playerScore;
    drawNumberDisplay.textContent = drawNumber;
    computerScoresDisplay.textContent = computerScore;

    if (playerScore >= 5) {
        display.textContent = 'Congratulation! You Win 5 total scores.';
    } else if (computerScore >= 5) {
        display.textContent = 'Sorry! Computer Win 5 total scores, You lose Git Good';
    }
}

// display player and computer selection
function displaySelection(p, c) {
    const displayObject = {
        rock: '<i class="fa-solid fa-hand-back-fist"></i>',
        paper: '<i class="fa-solid fa-hand"></i>',
        scissors: '<i class="fa-solid fa-hand-scissors"></i>',
    };
    choiceDisplay.forEach(element=>element.classList.remove('hide'))
    console.log(choiceDisplay[1])
    choiceDisplay[1].innerHTML = displayObject[p];
    choiceDisplay[0].innerHTML = displayObject[c];
}

// stop game function
function stopGame() {}

// reset button behavior
function resetRound() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    display.textContent = '';
}
