function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        return ('rock');
    } else if(computerChoice == 2) {
        return ('paper');
    } else if(computerChoice == 3) {
        return ('scissor');
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt('Please, pick rock, paper or scissor').toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissor') {
        return humanChoice;
    } else {
        return getHumanChoice();
    }
}
console.log(getHumanChoice());

humanScore = 0;
computerScore = 0;