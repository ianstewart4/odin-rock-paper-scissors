// Rock Paper Scissors Game
// Make computerPlay function that will automatically return rock/paper/scissors
function computerPlay() {
    // randomly select rock/paper/scissors
    let pcPlay = ['Rock', 'Paper', 'Scissors'];
    let randomPlay = pcPlay[Math.floor(Math.random() * 3)];
    return randomPlay.toLowerCase();
}
// Get user input
function getInput() {
    let userPlay = prompt('Rock, Paper, Scissors?').toLowerCase();
    return userPlay;
}

// Check if input is correct
// Compare to computerPlay, determine winner
function playRound(playerSelection, computerSelection){
    console.log('Computer selected: ' + computerSelection);
    if (playerSelection == "rock"){
        console.log('You chose ROCK');
        if (computerSelection == 'rock'){
            console.log('TIE!');
        } else if (computerSelection == 'paper'){
            console.log('Paper beats rock, you lose!');
        } else if (computerSelection == 'scissors'){
            console.log('Rock beats scissors, you win!');
        }
        
    } else if (playerSelection == "paper"){
        console.log('You chose PAPER');
        if (computerSelection == 'paper'){
            console.log('TIE!');
        } else if (computerSelection == 'rock'){
            console.log('Paper beats rock, you win!');
        } else if (computerSelection == 'scissors'){
            console.log('Scissors beat paper, you lose!');
        }

    } else if (playerSelection == "scissors"){
        console.log('You chose SCISSORS');
        if (computerSelection == 'scissors'){
            console.log('TIE!');
        } else if (computerSelection == 'paper'){
            console.log('Scissors beat paper, you win!');
        } else if (computerSelection == 'rock'){
            console.log('Rock beats scissors, you lose!');
        }
    } else {
        console.log('Player did not enter a valid selection');
    }
    
}
let gameOn = true;

playRound(getInput(),computerPlay());

// while (gameOn) {
//     playRound(getInput(),computerPlay());
// }