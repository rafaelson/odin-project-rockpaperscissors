const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const scoreCounter = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => playRound("Rock", computerPlay()));
paper.addEventListener("click", () => playRound("Paper", computerPlay()));
scissors.addEventListener("click", () => playRound("Scissors", computerPlay()));

function computerPlay() {
  let randNumber = Math.floor(Math.random() * 3) + 1;
  switch (randNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function checkWinner() {
  if (playerScore == 5) {
    result.innerText = "You won the game!";
    computerScore = 0;
    playerScore = 0;
  } else if (computerScore == 5) {
    result.innerText = "Computer won the game!";
    computerScore = 0;
    playerScore = 0;
  }
  scoreCounter.innerText = `Computer: ${computerScore} | You: ${playerScore}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result.innerText = "It's a Draw!";
  } else {
    switch (playerSelection) {
      case "Rock":
        if (computerSelection == "Paper") {
          result.innerText = "You lose! Paper beats Rock!";
          computerScore++;
        } else {
          result.innerText = "You win! Rock beats scissors!";
          playerScore++;
        }
        break;
      case "Paper":
        if (computerSelection == "Rock") {
          result.innerText = "You win! Paper beats Rock!";
          playerScore++;
        } else {
          result.innerText = "You lose! Scissors beat paper!";
          computerScore++;
        }
        break;
      case "Scissors":
        if (computerSelection == "Paper") {
          result.innerText = "You win! Scissors beats Paper!";
          playerScore++;
        } else {
          result.innerText = "You lose! Rock beats Scissors!";
          computerScore++;
        }
        break;
    }
  }
  scoreCounter.innerText = `Computer: ${computerScore} | You: ${playerScore}`;
  checkWinner();
}
