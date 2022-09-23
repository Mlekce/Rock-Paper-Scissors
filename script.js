'use strict'
//Variables
let playerScore = 0;
let computerScore = 0;
const computer = function(){
    const choices = ['rock', 'paper', 'siccssors'];
    const randomizer = Math.trunc(Math.random()*3);
    return choices[randomizer];
};
const player = function(){
    let choice = prompt("Enter rock, paper or siccssors.").toLowerCase();
    if (!choice || (choice !== 'rock' && choice !== 'paper' && choice !== 'siccssors')){
        const choices = ['rock', 'paper', 'siccssors'];
        const randomizer = Math.trunc(Math.random()*3);
        return choices[randomizer];
    }
    else
        return choice;
};
//Main game      
function game() {
    for(let i = 0; i < 5; i++){
        playRound(player(),computer());
    }
    winner(playerScore, computerScore);
}        
//Game RPS    
function playRound(playerSelection, computerSelection){            
    if (playerSelection == 'rock' && computerSelection == 'siccssors'){
        playerScore++;
        console.log(`You won player choice was ${playerSelection}, computer choice was ${computerSelection}, player score is ${playerScore}, computer score is ${computerScore}`);
        return playerScore, computerScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        console.log(`You won player choice was ${playerSelection}, computer choice was ${computerSelection}, player score is ${playerScore}, computer score is ${computerScore}`);
        return  playerScore, computerScore;
    }
    else if (playerSelection == 'siccssors' && computerSelection == 'paper'){
        playerScore++;
        console.log(`You won player choice was ${playerSelection}, computer choice was ${computerSelection}, player score is ${playerScore}, computer score is ${computerScore}`);
        return playerScore, computerScore;
    }
    else if (playerSelection == computerSelection ){
        console.log(`DRAW! player choice was ${playerSelection}, computer choice was ${computerSelection}, player score is ${playerScore}, computer score is ${computerScore}`);
        return playerScore, computerScore;
    }
    else {
        computerScore++;
        console.log(`You lost player choice was ${playerSelection}, computer choice was ${computerSelection}, player score is ${playerScore}, computer score is ${computerScore}`);
        return playerScore, computerScore;
    }
} 
//Check winner function
function winner(player, computer){
    if(player > computer){
        console.log(`You won ${player}, computer score ${computer}`);
     }
    else if (player < computer){
        console.log(`You lost ${player}, computer score ${computer}`);
    }
    else {
        console.log(`Draw. ${player}, computer score ${computer}`);
    }
}
game();