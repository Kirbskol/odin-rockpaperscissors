// home screen functions
let i = 0;
let placeholder = "";
const txt = "ENTER YOUR NAME";
const speed = 150;

function type(){
    placeholder += txt.charAt(i);
    document.getElementById("start__input").setAttribute
    ("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
}

type();

const startBtn = document.querySelector(".start__btn");
const start = document.querySelector(".start");
const container = document.querySelector("#container");
const displayUser = document.querySelector(".scoreboard__user__title")
let userNameRaw = "";
let userName = "";
startBtn.addEventListener("click", () => {
    userNameRaw = document.getElementById("start__input").value;
    userName = userNameRaw.toUpperCase();
    start.style.display = "none";
    container.style.display = "flex";
    displayUser.textContent = `${userName}`;
})

// scoreboard variables are set to global as used across multiple functions
humanScore = 0;
computerScore = 0;

// UI elements (work in progress)

const scoreboard = document.querySelector(".scoreboard");
const scoreboardUser = document.querySelector(".scoreboard__user__score");
const scoreboardCpu = document.querySelector(".scoreboard__cpu__score");
scoreboardUser.textContent = `${humanScore}`;
scoreboardCpu.textContent = `${computerScore}`;

const buttons = document.querySelectorAll("button");
const rockBtn = document.querySelector(".controls__rock__btn");
const paperBtn = document.querySelector(".controls__paper__btn");
const scissorsBtn = document.querySelector(".controls__scissors__btn");

let humanChoice = "";

rockBtn.addEventListener("click", () => {
    humanChoice = "ROCK";
    playRound();
    });
paperBtn.addEventListener("click", () => {
    humanChoice = "PAPER";
    playRound();
    });
scissorsBtn.addEventListener("click", () => {
    humanChoice = "SCISSORS";
    playRound();
    });


function playRound() {
    while (humanScore != 5 && computerScore != 5){
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    console.log(`Player selects: ${humanSelection}\nComputer selects: ${computerSelection}`);
    if (
        (humanSelection == "ROCK" && computerSelection == "ROCK") || 
        (humanSelection == "PAPER" && computerSelection == "PAPER") || 
        (humanSelection == "SCISSORS" && computerSelection == "SCISSORS")
    ) {
        console.log(`TIE round. ${humanSelection} and ${humanSelection} don't beat each other!`);
    } else if (
        (humanSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (humanSelection == "PAPER" && computerSelection == "ROCK") || 
        (humanSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        console.log(`PLAYER wins the round. ${humanSelection} beats ${computerSelection}!`);
        humanScore++;
        scoreboardUser.textContent = `${humanScore}`;
        return humanScore;
    } else if (
        (computerSelection == "ROCK" && humanSelection == "SCISSORS") || 
        (computerSelection == "PAPER" && humanSelection == "ROCK") || 
        (computerSelection == "SCISSORS" && humanSelection == "PAPER")
    ) {
        console.log(`COMPUTER wins the round. ${computerSelection} beats ${humanSelection}!`);
        computerScore++;
        scoreboardCpu.textContent = `${computerScore}`;
        return computerScore;
    };
    }
}

/* uses random number generated * 120 to determine computerChoice, this is
 * due to 120 being divisible by three (three possible choices of hand)
 */
function getComputerChoice() {
    let compChoice = [];
    let compNum = Math.round(Math.random() * 120);
    if (compNum <= 40) {
        compChoice = "ROCK"; 
    } else if (
        compNum > 40 && 
        compNum <= 80
    ){
        compChoice = "PAPER";
    } else if (
        compNum > 80
    ) {
        compChoice = "SCISSORS";
    }
    return compChoice;
}

/* 
 * while loop used so only user input of "ROCK", "PAPER" or "SCISSORS" 
 * is accepted (this is case insensitive as input changed toUpperCase) 
 */
// function getHumanChoice() {
//     let humanChoice;
//     do{
//     let userInput = prompt("Choose your hand: ");
//     humanChoice = userInput.toUpperCase();
//     } while (
//         (humanChoice !== "ROCK") && 
//         (humanChoice !== "PAPER") && 
//         (humanChoice !== "SCISSORS")
//     );
//     return humanChoice;
// }

// function playRound() {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     console.log(`Player selects: ${humanSelection}\nComputer selects: ${computerSelection}`);
//     if (
//         (humanSelection == "ROCK" && computerSelection == "ROCK") || 
//         (humanSelection == "PAPER" && computerSelection == "PAPER") || 
//         (humanSelection == "SCISSORS" && computerSelection == "SCISSORS")
//     ) {
//         console.log(`TIE round. ${humanSelection} and ${humanSelection} don't beat each other!`);
//     } else if (
//         (humanSelection == "ROCK" && computerSelection == "SCISSORS") || 
//         (humanSelection == "PAPER" && computerSelection == "ROCK") || 
//         (humanSelection == "SCISSORS" && computerSelection == "PAPER")
//     ) {
//         console.log(`PLAYER wins the round. ${humanSelection} beats ${computerSelection}!`);
//         humanScore++;
//     } else if (
//         (computerSelection == "ROCK" && humanSelection == "SCISSORS") || 
//         (computerSelection == "PAPER" && humanSelection == "ROCK") || 
//         (computerSelection == "SCISSORS" && humanSelection == "PAPER")
//     ) {
//         console.log(`COMPUTER wins the round. ${computerSelection} beats ${humanSelection}!`);
//         computerScore++;
//     }
//     console.log(`PLAYER SCORE: ${humanScore}\nCOMPUTER SCORE: ${computerScore}`);
// }

// function getResult() {
//     if (humanScore > computerScore) {
//         console.log("*** PLAYER WINS ***")
//     }
//     else if (humanScore < computerScore) {
//         console.log("*** COMPUTER WINS ***")
//     }
//     else if (humanScore == computerScore) {
//         console.log("*** NO-ONE WINS, TIE GAME ***")
//     }
//     computerScore = 0;
//     humanScore = 0;
// }







