// scoreboard variables
humanScore = 0;
computerScore = 0;

// uses random number * 120 to determine computerChoice
function getComputerChoice() {
    let compChoice = [];
    let compNum = Math.round(Math.random() * 120);
    if (compNum <= 40) {
        compChoice = "ROCK"; 
    }
    else if (compNum > 40 && compNum <= 80){
        compChoice = "PAPER";
    }
    else if (compNum > 80) {
        compChoice = "SCISSORS";
    }
    return compChoice;
}
  // obtains user input for humanChoice, re-prompts if not valid input
function getHumanChoice() {
    let humanChoice;
    do{
    let userInput = prompt("Choose your hand: ");
    humanChoice = userInput.toUpperCase();
    } while ((humanChoice !== "ROCK") && (humanChoice !== "PAPER") && (humanChoice !== "SCISSORS"));
    return humanChoice;
}

// play a single round of rock, paper, scissors.
function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Player selects: ${humanSelection}\nComputer selects: ${computerSelection}`);
    if ((humanSelection == "ROCK" && computerSelection == "ROCK") || (humanSelection == "PAPER" && computerSelection == "PAPER") || (humanSelection == "SCISSORS" && computerSelection == "SCISSORS")) {
        console.log(`TIE round. ${humanSelection} and ${humanSelection} don't beat each other!`);
    }
    else if ((humanSelection == "ROCK" && computerSelection == "SCISSORS") || (humanSelection == "PAPER" && computerSelection == "ROCK") || (humanSelection == "SCISSORS" && computerSelection == "PAPER")) {
        console.log(`PLAYER wins. ${humanSelection} beats ${computerSelection}!`);
        humanScore++;
    }
    else if ((computerSelection == "ROCK" && humanSelection == "SCISSORS") || (computerSelection == "PAPER" && humanSelection == "ROCK") || (computerSelection == "SCISSORS" && humanSelection == "PAPER")) {
        console.log(`COMPUTER wins. ${computerSelection} beats ${humanSelection}!`);
        computerScore++;
    }
}

// play a full match (five rounds) of rock, paper, scissors.
function playGame() {
    const totalRounds = 5;
    for (let x = 0; x < 5; x++){
        playRound();
    }
    console.log(`PLAYER SCORE: ${humanScore}\nCOMPUTER SCORE: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("*** PLAYER WINS ***")
    }
    else if (humanScore < computerScore) {
        console.log("*** COMPUTER WINS ***")
    }
    else if (humanScore == computerScore) {
        console.log("*** NO-ONE WINS, TIE GAME ***")
    }
    computerScore = 0;
    humanScore = 0;
}