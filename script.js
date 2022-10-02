let playerScore = 0;
let computerScore = 0;
let counter = 0;
const rock = document.querySelectorAll(".rock");
const paper = document.querySelectorAll(".paper");
const siccssors = document.querySelectorAll(".siccssors");
const buttons = document.querySelectorAll("button");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const resoultsPlayer = document.querySelector(".resoultsPlayer");
const resoultsComputer = document.querySelector(".resoultsComputer");
const status = document.querySelector(".status");
const final = document.querySelector(".finalScore");
const body = document.body;
const container = document.querySelector(".container");

const computer = function () {
  const choices = ["rock", "paper", "siccssors"];
  const randomizer = Math.trunc(Math.random() * 3);
  return choices[randomizer];
};

buttons.forEach((button) => {
  button.addEventListener("click", function playRound() {
    let playerSelection = button.getAttribute("class");
    const computerSelection = computer();
    counter++;
    console.log(`Rounds played ${counter}`);
    if (counter <= 5) {
      if (playerSelection == "rock" && computerSelection == "siccssors") {
        playerScore++;
        playerChoice.innerText = `Player choice was: ${playerSelection}`;
        computerChoice.innerText = `Computer choice was: ${computerSelection}`;
        resoultsPlayer.innerText = `Player score is: ${playerScore}`;
        resoultsComputer.innerText = `Computer score is: ${computerScore}`;
        status.textContent = "Round resoult: You won!";
        return playerScore, computerScore;
      } 
      else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        playerChoice.innerText = `Player choice was: ${playerSelection}`;
        computerChoice.innerText = `Computer choice was: ${computerSelection}`;
        resoultsPlayer.innerText = `Player score is: ${playerScore}`;
        resoultsComputer.innerText = `Computer score is: ${computerScore}`;
        status.textContent = "Round resoult: You won!";
        return playerScore, computerScore;
      } 
      else if (
        playerSelection == "siccssors" && computerSelection == "paper") {
        playerScore++;
        playerChoice.innerText = `Player choice was: ${playerSelection}`;
        computerChoice.innerText = `Computer choice was: ${computerSelection}`;
        resoultsPlayer.innerText = `Player score is: ${playerScore}`;
        resoultsComputer.innerText = `Computer score is: ${computerScore}`;
        status.textContent = "Round resoult: You won!";
        return playerScore, computerScore;
      } 
      else if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        playerChoice.innerText = `Player choice was: ${playerSelection}`;
        computerChoice.innerText = `Computer choice was: ${computerSelection}`;
        resoultsPlayer.innerText = `Player score is: ${playerScore}`;
        resoultsComputer.innerText = `Computer score is: ${computerScore}`;
        status.textContent = "Round resoult: Draw!";
        return playerScore, computerScore;
      } 
      else {
        computerScore++;
        playerChoice.innerText = `Player choice was: ${playerSelection}`;
        computerChoice.innerText = `Computer choice was: ${computerSelection}`;
        resoultsPlayer.innerText = `Player score is: ${playerScore}`;
        resoultsComputer.innerText = `Computer score is: ${computerScore}`;
        status.textContent = "Round resoult: You lost!";
        return playerScore, computerScore;
      }
    }
    winner(playerScore, computerScore);
  });
});

function winner(player, computer) {
  if (player > computer) {
    final.textContent = `You won. player score: ${player}, computer score: ${computer}`;
    container.classList.add("hidden");
    body.style.cssText =
      "background-color:rgb(94, 182, 138); color:white; font-size:65px; margin: auto; text-align: center;margin-top:20%;";
    body.textContent = "You won!";
  } else if (player < computer) {
    final.textContent = `You lost. player score:  ${player}, computer score: ${computer}`;
    container.classList.add("hidden");
    body.style.cssText =
      "background-color:rgb(182, 94, 116);color:white; font-size:65px; margin: auto; text-align: center;margin-top:20%;";
    body.textContent = "You lost!";
  } else {
    final.textContent = `Draw! player score:  ${player}, computer score: ${computer}`;
    container.classList.add("hidden");
    body.style.cssText =
      "background-color:rgb(182, 181, 94); color:white; font-size:65px; margin: auto; text-align: center; margin-top:20%;";
    body.textContent = "Draw!";
  }
}
