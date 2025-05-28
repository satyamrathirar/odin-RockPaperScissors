console.log("Rock Paper Scissors Game Loaded");
let getComputerChoice = function(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
