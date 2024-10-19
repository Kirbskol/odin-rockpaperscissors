// scoreboard variables are set to global as used across multiple functions
let humanScore = 0;
let computerScore = 0;
let noScore = 0;

// home screen functions
let i = 0;
let placeholder = "";
const txt = "NAME...";
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
const canvas = document.querySelector('#confetti');
const headingDesc = document.querySelector(".heading__desc");
const displayUser = document.querySelector(".scoreboard__user__title")
let userNameRaw = "";
let userName = "";
startBtn.addEventListener("click", () => {
    userNameRaw = document.getElementById("start__input").value;
    userName = userNameRaw.toUpperCase();
    let userNameLen = userName.length;
    if (userNameLen < 1){
        alert("Enter your name to continue!")
        return;
    }
    // scoreboard variables are set to global as used across multiple functions
    humanScore = 0;
    computerScore = 0;
    noScore = 0;
    start.style.display = "none";
    headingDesc.style.display = "block";
    container.style.display = "flex";
    displayUser.textContent = `${userName}`;
})

// UI elements (work in progress)
const scoreboard = document.querySelector(".scoreboard");
const scoreboardUser = document.querySelector(".scoreboard__user__score");
const scoreboardCpu = document.querySelector(".scoreboard__cpu__score");
const result = document.querySelector(".result");
const resultChoices = document.querySelector(".result__choices");
const resultWinner = document.querySelector(".result__winner");
const resultBtn = document.querySelector(".result__btn");
scoreboardUser.textContent = `${humanScore}`;
scoreboardCpu.textContent = `${computerScore}`;

const buttons = document.querySelectorAll("button");
const rockBtn = document.querySelector(".controls__rock__btn");
const paperBtn = document.querySelector(".controls__paper__btn");
const scissorsBtn = document.querySelector(".controls__scissors__btn");

let humanChoice = "";

rockBtn.addEventListener("click", () => {
    humanChoice = "ROCK";
    checkWinner();
    playRound();
    });
paperBtn.addEventListener("click", () => {
    humanChoice = "PAPER";
    checkWinner();
    playRound();
    });
scissorsBtn.addEventListener("click", () => {
    humanChoice = "SCISSORS";
    checkWinner();
    playRound();
    });


function playRound() {
    while (humanScore != 5 && computerScore != 5){
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    scoreboard.style.display = "none";
    headingDesc.style.display = "none";
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    result.style.display = "flex";
    console.log(`Player selects: ${humanSelection}\nComputer selects: ${computerSelection}`);
    if (
        (humanSelection == "ROCK" && computerSelection == "ROCK") || 
        (humanSelection == "PAPER" && computerSelection == "PAPER") || 
        (humanSelection == "SCISSORS" && computerSelection == "SCISSORS")
    ) {
        result.style.display = "flex";
        resultWinner.textContent = `TIE ROUND.`
        resultChoices.textContent = `${humanSelection} AND ${computerSelection} DON'T BEAT EACH OTHER!`;
        checkWinner();
        return noScore;
    } else if (
        (humanSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (humanSelection == "PAPER" && computerSelection == "ROCK") || 
        (humanSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        result.style.display = "flex";
        resultWinner.textContent = `${userName} WINS THE ROUND!`;
        resultChoices.textContent = `${humanSelection} beats ${computerSelection}!`;
        ++humanScore;
        scoreboardUser.textContent = `${humanScore}`;
        checkWinner();
        return humanScore;
    } else if (
        (computerSelection == "ROCK" && humanSelection == "SCISSORS") || 
        (computerSelection == "PAPER" && humanSelection == "ROCK") || 
        (computerSelection == "SCISSORS" && humanSelection == "PAPER")
    ) {
        result.style.display = "flex";
        resultWinner.textContent = `COMPUTER WINS THE ROUND!`;
        resultChoices.textContent = `${computerSelection} beats ${humanSelection}!`;
        ++computerScore;
        scoreboardCpu.textContent = `${computerScore}`;
        checkWinner();
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

resultBtn.addEventListener("click", () => {
    result.style.display = "none";
    scoreboard.style.display = "flex";
    headingDesc.style.display = "block";
    rockBtn.style.display = "flex";
    paperBtn.style.display = "flex";
    scissorsBtn.style.display = "flex";
});

function checkWinner() {
    if (humanScore === 5 || computerScore === 5){
        getWinner();
    }
    else {
        return;
    }
}

function getWinner(){
    resultBtn.textContent = "NEW GAME";
    scoreboard.style.display = "none";
    headingDesc.style.display = "none";
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    result.style.display = "flex";
    if (humanScore === 5){
        resultWinner.textContent = `${userName} IS THE CHAMPION!`;
        resultChoices.textContent = `BEATING THE COMPUTER BY ${humanScore} TO ${computerScore}`;
    }
    if (computerScore === 5){
        resultWinner.textContent = `LOSER! COMPUTER IS THE CHAMPION!`;
        resultChoices.textContent = `COMPUTER BEATS ${userName} BY ${computerScore} TO ${humanScore}`;
    }
    resultBtn.addEventListener("click", () => {
        container.style.display = "none";
        headingDesc.style.display = "none";
        start.style.display = "flex";
    });
    confetti();
}

const jsConfetti = new JSConfetti();

function confetti() {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
}