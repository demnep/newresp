 function getHumanChoice() {
    const choice = prompt('please enter rock, paper or scissor');
    if (choice === 'rock') {
        return console.log('human picked rock');
    } else if (choice === 'paper') {
        return console.log('human picked paper');
    } else if (choice === 'scissor') {
        return console.log('human picked scissor');
    } else {
        return console.log('human picked invalid');
    }
 }
 console.log(getHumanChoice());
 
function getComputerChoice(max) {
    if (Math.floor(Math.random() * max) === 0) {
        return console.log('rock');
    } else if (Math.floor(Math.random() * max) === 1) {
        return console.log('paper');
    } else {
        return console.log('scissor');
    }
}
    console.log(getComputerChoice(3));
