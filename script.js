console.log("Rock Paper Scissors Game Loaded");
let getComputerChoice = function(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
let getHumanChoice = function(){
    let hChoice = prompt("enter your choice :");
    return hChoice;
}

document.getElementById("rock").onclick = () => playRound("rock");
document.getElementById("paper").onclick = () => playRound("paper");
document.getElementById("scissors").onclick = () => playRound("scissors");