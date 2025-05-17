function getComputerChoice(max) {
    if (Math.floor(Math.random() * max) === 0) {
        return console.log('rock');
    } else if (Math.floor(Math.random() * max) === 1) {
        return console.log('papper');
    } else {
        return console.log('scissor');
    }
}
    console.log(getComputerChoice(3));