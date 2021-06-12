// Rock Paper Scissors Game
// Make computerPlay function that will automatically return rock/paper/scissors
function computerPlay() {
    // randomly select rock/paper/scissors
    let pcPlay = ['Rock', 'Paper', 'Scissors'];
    let randomPlay = pcPlay[Math.floor(Math.random() * 3)];
    // console.log(randomPlay);
    return randomPlay.toLowerCase();
}
// Get user input
function getInput() {
    return prompt('Rock, Paper, Scissors?');
}

// Check if input is correct
// Compare to pcplay, determine winner
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock"){
        console.log('You chose ROCK');
        if (computerSelection = '')
    } else if (playerSelection.toLowerCase() == "paper"){
        console.log('You chose PAPER');
    } else if (playerSelection.toLowerCase() == "scissors"){
        console.log('You chose SCISSORS');
    } else {
        console.log('Player did not enter a valid selection');
    }
    
}
let gameOn = true;

while (gameOn) {

}