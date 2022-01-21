// js html

// hero
const body = document.body
const h1 = document.createElement('h1');
body.appendChild(h1);
h1.textContent = 'Rock, Paper, Scissors GAME';
const h2 = document.createElement('h2');
body.appendChild(h2);
h2.textContent = 'Win 5 rounds';
const h3 = document.createElement('h3');
body.appendChild(h3);
h3.innerHTML = 'Player <span id="pScore">0</span> - <span id="cScore">0</span> Computer';

// content
const div = document.createElement('div')
div.classList.add('options')
body.appendChild(div)

const btnRock = document.createElement('button');
btnRock.classList.add('button');
btnRock.textContent = 'Rock';
div.appendChild(btnRock)
const btnPaper = document.createElement('button');
btnPaper.classList.add('button');
btnPaper.textContent = 'Paper';
div.appendChild(btnPaper)
const btnScissors = document.createElement('button');
btnScissors.classList.add('button');
btnScissors.textContent = 'Scissors';
div.appendChild(btnScissors)
btnRock.setAttribute('style', 'font-size: 20px;color: red; background: blue; border-radius: 10px; padding: 5px 40px; margin: 20px;');
btnPaper.setAttribute('style', 'font-size: 20px;color: red; background: blue; border-radius: 10px; padding: 5px 40px; margin: 20px;');
btnScissors.setAttribute('style', 'font-size: 20px;color: red; background: blue; border-radius: 10px; padding: 5px 40px; margin: 20px;');

//code
const buttons = document.querySelectorAll(".button");
let playerScore = 0;
let compScore = 0;
console.log(playerScore)
buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        // text in the button class
        const playerInput = this.textContent;
        // comp input
        const compChoice = ['Rock', 'Paper', 'Scissors'];
        const compInput = compChoice[Math.floor(Math.random() * 3)];
        compareInputs(playerInput, compInput);
        updateScore();
        if (findWinner()) {
            if (playerScore === 5 || compScore === 5 ) {
                location.reload();
            }
           };
    })
});


  
// game logic 

const compareInputs = (playerInput, compInput) => {
    const round = `${playerInput} vs ${compInput}`
   // tie code
   
    if (playerInput === compInput) {
        alert(`${round} is a Tie`);
        return;
    }
    // rock
    if (playerInput === 'Rock') {
        if (compInput === 'Scissors') {
            alert(`${round} = You Win!`);
            playerScore++
        } else {
            alert(`${round} = Sorry you lose :(`);
            compScore++
        }
    } 
    // scissors
    if (playerInput === 'Scissors') {
        if (compInput === 'Paper') {
            alert(`${round} = You Win!`);
            playerScore++
        } else {
            alert(`${round} = Sorry you lose :(`);
            compScore++
        }
    } 
    // paper
    if (playerInput === 'Paper') {
        if (compInput === 'Rock') {
            alert(`${round} = You Win!`);
            playerScore++
        } else {
            alert(`${round} = Sorry you lose :(`);
            compScore++
        }
    } 
};
// score update
const updateScore = () => { 
    document.getElementById("pScore").textContent = playerScore;
    document.getElementById("cScore").textContent = compScore;
}

// find the winner 
const findWinner = () => {
    if (playerScore === 5 || compScore === 5) {
        const winner =
          playerScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
        
      }
      return false;
      
    };