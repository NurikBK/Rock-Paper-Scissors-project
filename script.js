let playerScore = 0;
let compScore = 0;

// comp choice function
function computerPlay(choice) {
   choice = Math.floor(Math.random() * 3);
   switch (choice) {
    case 0:
        return 'rock';
        break;
    case 1:
        return 'paper';
        break;
    case 2:
        return 'scissors';
        break;

   }
};
//console.log(computerSelection())

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'The Game is a tie'
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            compScore++;
            return 'Sorry you lose :( paper beats rock'
        } else {
            playerScore++;
            return 'You won the round!'
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){
            compScore++;
            return 'Sorry you lose :( rock beats scissors'
        } else {
            playerScore++;
            return 'You won the round!'
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            compScore++;
            return 'Sorry you lose :( scissors beats paper'
        } else {
            playerScore++;
            return 'You won the round!'
        }
    }
};

const totalScore = (total) => {
    if (playerScore === 5) {
        return 'You won the game';
    } else if (compScore === 5){
        return 'Sorry you lost the game. Please reload the the page if wanna play again.'
    } else {
        return 'Next round'
    }
} 
const playerSelection = window.prompt().toLowerCase();
const computerSelection = computerPlay();

/*const game = () => {
    playRound(playerSelection, computerSelection);
   
}*/



console.log( playRound(playerSelection, computerSelection));
console.log('your score:' + playerScore);
console.log('compscore:'+ compScore);
console.log(totalScore())
  