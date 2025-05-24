// random computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        return 'rock';
    } else if (computerChoice == 2) {
        return 'paper';
    } else if (computerChoice == 3) {
        return 'scissor';
    } 
}
// console.log(getComputerChoice());
// get human input 
function getHumanChoice() {
    let humanChoice = prompt('Please enter rock, paper or scissor').toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor') {
        return humanChoice;
    } else {
        return getHumanChoice();
    }
}
// console.log(getHumanChoice());

// game 
function playGame() {
// game score
let humanScore = 0;
let computerScore = 0;

// round of game 
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('It\'s draw!');
    } else if (humanChoice == 'rock' && computerChoice == 'scissor' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissor' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); humanScore = humanScore + 1;
    } else if (humanChoice == 'scissor' && computerChoice == 'rock' || humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissor') {
        console.log(`You lose! ${humanChoice} loses against ${computerChoice}.`); computerScore = computerScore + 1;
    }
}
for (let i = 0; i < 5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}
// final score of the game
function finalScore() {
    if (humanScore == computerScore) {
     return `It\'s draw game! Human ${humanScore} - ${computerScore} Computer.`;
    } else if (humanScore > computerScore) {
        return `You win the game! Human ${humanScore} - ${computerScore} Computer.`;
    } else if (humanScore < computerScore) {
        return `You lose the game! Human ${humanScore} - ${computerScore} Computer.`;
    }
}
console.log(finalScore());
}
playGame();