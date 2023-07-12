const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const LOSE = "You lose!";
const WIN = "You win!";
const TIE = "Tie game!";

let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.getElementsByClassName("choice-button");

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (playerChoice) => {
  let computerChoice = getComputerChoice();
  let result;

  console.log("Player: " + playerChoice);
  console.log("Computer: " + computerChoice);

  if (playerChoice == computerChoice) {
    result = TIE;
    document.getElementById("round-result").textContent = result;
  } else if (playerChoice == ROCK && computerChoice == PAPER) {
    result = LOSE;
    document.getElementById("round-result").textContent = result;
  } else if (playerChoice == PAPER && computerChoice == SCISSORS) {
    result = LOSE;
    document.getElementById("round-result").textContent = result;
  } else if (playerChoice == SCISSORS && computerChoice == ROCK) {
    result = LOSE;
    document.getElementById("round-result").textContent = result;
  } else {
    result = WIN;
    document.getElementById("round-result").textContent = result;
  }

  updateScore(result);
};

const updateScore = (result) => {
  if (result == LOSE) {
    computerScore++;
    document.getElementById("computer-score").textContent =
      "Computer:" + " " + computerScore;
  } else if (result == WIN) {
    playerScore++;
    document.getElementById("player-score").textContent =
      "Player:" + " " + playerScore;
  }
  checkWin(playerScore, computerScore);
};

const checkWin = (player, computer) => {
  if (player == 5) {
    disableBtn();
    document.getElementById("winner").textContent =
      "Congratulations! You won the game!";
  } else if (computer == 5) {
    disableBtn();
    document.getElementById("winner").textContent =
      "Cowabummer, dude! You lost the game!";
  } else {
    return;
  }

  winnerCont.appendChild(playAgain);
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("winner").textContent = " ";
  document.getElementById("computer-score").textContent = " ";
  document.getElementById("player-score").textContent = " ";
};

const disableBtn = () => {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = true;
  }
};

const enableBtn = () => {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = false;
  }
};

const winnerCont = document.querySelector("#winner-container");

const playAgain = document.createElement("button");
playAgain.id = "playAgain";
playAgain.textContent = "Play again?";

playAgain.addEventListener("click", () => {
  enableBtn();
  resetGame();
});

const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
