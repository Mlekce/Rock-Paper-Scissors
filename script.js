'use strict'
function  startGame(){
        winner(getComputerChoice(),userChoice());
}
//Random computer choice logic
const choice = ['rock', 'paper', 'siccssors'];
const randomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const getComputerChoice = function(){
    return choice[randomInteger(0,2)];
} 

//Player logic and validation of choice.
const userChoice = function(){
    let a = prompt("Please enter rock, paper or siccssors.");
    return a;
};

//game logic
function winner(playerChoice, computerChoice){
    if (playerChoice !== 'rock' && playerChoice !== 'siccssors' && playerChoice !== 'paper'){
        alert("Wrong input, enter rock paper or siccssors");
        startGame();
    }
    else {
        if (playerChoice == 'rock' && computerChoice == 'siccssors'){
            console.log("You won!");
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock'){
            console.log("You won!");
        }
        else if (playerChoice == 'siccssors' && computerChoice == 'paper'){
            console.log("You won!");
        }
        else{
            console.log("You did not win!");
            let repeater = prompt("Want to play another round? Press Y or y")
            if(repeater == 'Y' || repeater == "y"){
                winner(userChoice(), getComputerChoice());
            }
            else {
                alert("Game Over, press f5 to reload.")
            }   
        }
    }
}

winner(userChoice(), getComputerChoice());
