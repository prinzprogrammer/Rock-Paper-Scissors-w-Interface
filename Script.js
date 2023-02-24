const computerChoices = ["Rock", "Paper", "Scissors"];
const gameWinner = document.getElementById("game-title");
const computerChoice = document.getElementById("computer-choice");
const playerChoices = document.querySelectorAll("button");
const playerChoice = document.getElementById("player-choice");
let playerHandImg = document.getElementById("playerHand");
let computerHandImg = document.getElementById("computerHand");
let userChoice;
let randomComputerChoice;

const showHand = {
  transform: "rotate(-7deg) translateX(50px)",
};

playerChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    playerChoice.innerHTML = userChoice;
    console.log("Player:", userChoice);

    if (userChoice == "Rock") {
      playerHandImg.src = "icons/player/rock.png";
      Object.assign(playerChoice, showHand);
    } else if (userChoice == "Paper") {
      playerHandImg.src = "icons/player/paper.png";
    } else {
      playerHandImg.src = "icons/player/scissors.png";
    }
    getComputerChoice();
    game();
  })
);

function getComputerChoice() {
  randomize = Math.floor(Math.random() * computerChoices.length);
  randomComputerChoice = computerChoices[randomize];
  console.log("Computer: ", randomComputerChoice);
  computerChoice.innerHTML = randomComputerChoice;

  if (randomComputerChoice == "Rock") {
    computerHandImg.src = "icons/computer/rock.png";
  } else if (randomComputerChoice == "Paper") {
    computerHandImg.src = "icons/computer/paper.png";
  } else {
    computerHandImg.src = "icons/computer/scissors.png";
  }
  return randomComputerChoice;
}

function game() {
  if (userChoice == randomComputerChoice) {
    gameWinner.innerHTML = "It's A Tie!";
  } else if (
    (userChoice == "Rock" && randomComputerChoice == "Paper") ||
    (userChoice == "Paper" && randomComputerChoice == "Rock") ||
    (userChoice == "Scissors" && randomComputerChoice == "Paper")
  ) {
    gameWinner.innerHTML = "You Win!";
  } else {
    gameWinner.innerHTML = "You Lose!";
  }
}
