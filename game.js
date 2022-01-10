/*const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", () => deleteElement(startButton)); */

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));

function deleteElement(x) {
  x.remove();
}

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

function caseInsensitive(str) {
  let tmp1;
  let tmp2;
  tmp1 = str.slice(0, 1);
  tmp1 = tmp1.toUpperCase();
  tmp2 = str.slice(1);
  tmp2 = tmp2.toLowerCase();
  return tmp1 + tmp2;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = caseInsensitive(playerSelection);

  if (playerSelection == computerSelection) {
    return "It's a Draw!";
  } else {
    switch (playerSelection) {
      case "Rock":
        if (computerSelection == "Paper") {
          return "You lose! Paper beats Rock!";
        } else {
          return "You win! Rock beats scissors!";
        }
      case "Paper":
        if (computerSelection == "Rock") {
          return "You win! Paper beats Rock!";
        } else {
          return "You lose! Scissors beat paper!";
        }
      case "Scissors":
        if (computerSelection == "Paper") {
          return "You win! Scissors beats Paper!";
        } else {
          return "You lose! Rock beats Scissors!";
        }
    }
  }
}

function game() {
  let counter;
  let result;
  let score = 0;
  let playerSelection;

  /*for (counter = 0; counter < 5; counter++) {
    playerSelection = prompt("What do you choose?");
    result = playRound(playerSelection, computerPlay());
    if (result.slice(4, 7) == "win") {
      ++score;
    }
    console.log(result);
  }*/

  if (score >= 3) {
    console.log(`Congratulations! You won the game with a score of ${score}!`);
  } else {
    console.log(`You lost the game with a score of ${score}`);
  }
}
