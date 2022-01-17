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
            return 'Sorry you lose :( paper beats rock'
        } else {
            return 'You won!'
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){
            return 'Sorry you lose :( rock beats scissors'
        } else {
            return 'You won!'
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            return 'Sorry you lose :( scissors beats paper'
        } else {
            return 'You won!'
        }
    }
};

/*let playerScore = 0;
let compScore = 0;

let game = () => {
    playRound = i;
    for (i = 0; i <= 5; i++){
        if (){
            return playerScore++;
        } else {
            return compScore++;
        }
    }
}*/

const playerSelection = window.prompt().toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


  