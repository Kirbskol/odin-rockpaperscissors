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
}
  // obtains user input for humanChoice, re-prompts if not valid input
function getHumanChoice() {
    let humanChoice;
    do{
    let userInput = prompt("Choose your hand: ");
    humanChoice = userInput.toUpperCase();
    } while ((humanChoice !== "ROCK") && (humanChoice !== "PAPER") && (humanChoice !== "SCISSORS"));
}