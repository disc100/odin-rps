const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const LOSE = "You lose!";
const WIN = "You win!";
const TIE = "Tie game!";

let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.getElementsByClassName("choice-button");
const ressetable = document.getElementsByClassName("reset");

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (playerChoice) => {
  let computerChoice = getComputerChoice();
  let result;

  const roundResult = document.getElementById("round-result");

  document.getElementById("player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  if (playerChoice == computerChoice) {
    result = TIE;
  } else if (playerChoice == ROCK && computerChoice == PAPER) {
    result = LOSE;
  } else if (playerChoice == PAPER && computerChoice == SCISSORS) {
    result = LOSE;
  } else if (playerChoice == SCISSORS && computerChoice == ROCK) {
    result = LOSE;
  } else {
    result = WIN;
  }

  roundResult.textContent = result;
  updateScore(result);
};

const updateScore = (result) => {
  if (result == LOSE) {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
  } else if (result == WIN) {
    playerScore++;
    document.getElementById("player-score").textContent = playerScore;
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

  for (let i = 0; i < ressetable.length; i++) {
    ressetable[i].textContent = " ";
  }
  document.getElementById("round-result").textContent =
    "Make a choice to begin!";
};

const disableBtn = () => {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = true;
    choiceBtns[i].classList.add("disabled")
  }
};

const enableBtn = () => {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = false;
    choiceBtns[i].classList.remove("disabled")
  }
};

const winnerCont = document.querySelector("#winner-container");

const playAgain = document.createElement("button");
playAgain.id = "play-again";
playAgain.textContent = "Play again?";

playAgain.addEventListener("click", () => {
  enableBtn();
  resetGame();
  winnerCont.removeChild(playAgain);
});

const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
