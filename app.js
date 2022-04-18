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
const gameEndSection = document.querySelector('.game-end');
const displayWinLose = document.querySelector('#win-lose-game-end');

// variable
let roundNumber = 0;
let drawNumber = 0;
let playerScore = 0;
let computerScore = 0;
let play = false;

// event
playButton.addEventListener('click', playClicked);
buttons.forEach((button) => button.addEventListener('click', playRound));
reset.addEventListener('click', resetRound);

// function
// click play button
function playClicked() {
    play = true;
    grayOutContainer.forEach((element) => (element.style.display = 'none'));
    playButton.style.display = 'none';
    display.textContent = 'Game Started...';
}

// random rock paper scissor generator
function computerPlay() {
    const play = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return play[random];
}
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// core game play mechanic
function playRound(e) {
    if (play) {
        const playerSelection = e.currentTarget.value;
        const computerSelection = computerPlay();
        roundNumber += 1;

        displaySelection(playerSelection, computerSelection);

        if (playerSelection === computerSelection) {
            drawNumber += 1;
            display.textContent = `Draw! Both selected ${capitalize(playerSelection)}`;
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
            space - between;
        }

        roundNumberDisplay.textContent = roundNumber;
        playerScoresDisplay.textContent = playerScore;
        drawNumberDisplay.textContent = drawNumber;
        computerScoresDisplay.textContent = computerScore;

        if (playerScore >= 5) {
            displayWinLose.textContent = 'Congratulation! You Win!!!';
            stopGame();
        } else if (computerScore >= 5) {
            displayWinLose.textContent = 'Sorry! Computer Win, Git Good!';
            stopGame();
        }
    } else {
        alert('you should not be able to interact with the button, the game is not started, reload the page');
    }
}

// display player and computer selection
function displaySelection(p, c) {
    const displayObject = {
        rock: '<i class="fa-solid fa-hand-back-fist"></i>',
        paper: '<i class="fa-solid fa-hand"></i>',
        scissors: '<i class="fa-solid fa-hand-scissors"></i>',
    };
    choiceDisplay.forEach((element) => element.classList.remove('hide'));
    choiceDisplay[1].innerHTML = displayObject[p];
    choiceDisplay[0].innerHTML = displayObject[c];
}

// stop game function
function stopGame() {
    gameEndSection.classList.remove('hide');
    play = false;
}

// reset button behavior
function resetRound() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    drawNumber = 0;
    display.textContent = '';
    play = true;
    gameEndSection.classList.add('hide');
    roundNumberDisplay.textContent = 0;
    playerScoresDisplay.textContent = 0;
    drawNumberDisplay.textContent = 0;
    computerScoresDisplay.textContent = 0;
    choiceDisplay.forEach((element) => element.classList.add('hide'));
    playClicked();
}
