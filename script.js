console.log("Rock Paper Scissors Game Loaded");

let getComputerChoice = function() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

let getHumanChoice = function(playerInput) {
    console.log("player chose:", playerInput);
    return playerInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `Draw! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultText = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    
    document.getElementById("result").innerText = resultText;
    document.getElementById("playerScore").innerText = `Player Score: ${humanScore}`;
    document.getElementById("computerScore").innerText = `Computer Score: ${computerScore}`;

    
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        document.getElementById("result").innerText = `Game Over! ${winner} win the game!`;
        
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }

    console.log(resultText);
    return resultText;
}

function playGame(playerInput) {
    const humanSelection = getHumanChoice(playerInput);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

document.getElementById("rock").onclick = () => playGame("rock");
document.getElementById("paper").onclick = () => playGame("paper");
document.getElementById("scissors").onclick = () => playGame("scissors");