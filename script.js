function getComputerChoice() {
    // create blank string named compChoice, generate random number and times by 120 (divisible by 3)
    // then create if statement to decide whether CPU chooses rock, paper or scissors.
    let compChoice = [];
    let compNum = Math.round(Math.random() * 120);
    if (compNum <= 40) {
        compChoice = "Rock"; 
    }
    else if (compNum > 40 && compNum <= 80){
        compChoice = "Paper";
    }
    else if (compNum > 80) {
        compChoice = "Scissors";
    }
    console.log(compChoice);
}