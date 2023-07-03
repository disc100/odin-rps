const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const playRound = (player, computer) => {
    
};

const playerChoice = "rock";
const computerChoice = getComputerChoice();

console.log(computerChoice);

console.log(playRound(playerChoice, computerChoice));
