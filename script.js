const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const LOSE = "You lose!";
const WIN = "You win!";
const TIE = "Tie game!";

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const getPlayerChoice = () => {
  let choice = prompt("What is your choice?");
  choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

  if (choice == ROCK || choice == PAPER || choice == SCISSORS) {
    return choice;
  } else return getPlayerChoice();
};

const playRound = () => {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();

  console.log("Player: " + playerChoice);
  console.log("Computer: " + computerChoice);

  if (playerChoice == computerChoice) {
    return LOSE;
  } else if (playerChoice == ROCK && computerChoice == PAPER) {
    return LOSE;
  } else if (playerChoice == PAPER && computerChoice == SCISSORS) {
    return LOSE;
  } else if (playerChoice == SCISSORS && computerChoice == ROCK) {
    return LOSE;
  } else return WIN;
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < i + 1; i++) {
    console.log("Round" + " " + (i + 1));
    let result = playRound();

    console.log(result);
    if (result == WIN) {
      playerScore++;
    } else if (result == LOSE) {
      computerScore++;
    }
    console.log("Score:" + " " + playerScore + " " + computerScore);
    if (playerScore == 5 || computerScore == 5) {
      break;
    }
    console.log(" ");
  }
  if (playerScore > computerScore) {
    return console.log("Congratulations! You won the game!");
  } else return console.log("Cowabummer, dude! You lost the game!");
};

playGame();
