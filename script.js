const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const getPlayerChoice = () => {
  let choice = prompt("What is your choice?");

  if (choice[0].toUpperCase() + choice.slice(1).toLowerCase() == "Rock") {
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
  } else if (
    choice[0].toUpperCase() + choice.slice(1).toLowerCase() ==
    "Paper"
  ) {
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
  } else if (
    choice[0].toUpperCase() + choice.slice(1).toLowerCase() ==
    "Scissors"
  ) {
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();
  } else return getPlayerChoice();
};

const playRound = (playerChoice, computerChoice) => {
  if (playerChoice == computerChoice) {
    return "Tie game!";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    return "You lose!";
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    return "You lose!";
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    return "You lose!";
  } else return "You win!";
};

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
console.log("Player:" + " " + playerChoice);
console.log("Computer:" + " " + computerChoice);

console.log(playRound(playerChoice, computerChoice));
