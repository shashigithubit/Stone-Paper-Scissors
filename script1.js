// Grabbing the DOM elements
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userChoice;
let computerChoice;
let result;

// Add event listeners to all buttons
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `Your Choice: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
    
    // Random choice for computer
    generateComputerChoice();
    // Determine the winner
    getResult();
}));

// Generate random computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDisplay.innerHTML = `Computer's Choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
}

// Determine result
function getResult() {
    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'scissors' && computerChoice === 'paper') ||
               (userChoice === 'paper' && computerChoice === 'rock')) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    resultDisplay.innerHTML = `Result: ${result}`;
}
