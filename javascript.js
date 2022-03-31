function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function drawHand(maxCount) {
  let numberOne = 0;
  let numberTwo = 0;
  let numberThree = 0;
  let doneFuckedUp = 0;

  for (let i = 0; i < maxCount; i++) {
    int = getRandomIntInclusive(1, 3);

    if (int === 1) {
      numberOne += 1;
    } else if (int === 2) {
      numberTwo += 1;
    } else if (int === 3) {
      numberThree += 1;
    } else {
      doneFuckedUp += 1;
    }
  }
  console.log(`Number one = ${numberOne}
  number two = ${numberTwo}
  number three = ${numberThree}
  fucked up = ${doneFuckedUp}`)
}

function playRound() {
  let playerSelection = playerChoice()
  let computerSelection = computerChoice()

  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    return "draw"

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats rock");
    return "computer"

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    return "computer"

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors");
    return "computer"

  } else {
    console.log("You win!");
    return "player"
  }
}

function computerChoice() {
  int = getRandomIntInclusive(1, 3)
  let choice

  if (int === 1) {
    choice = "rock";
  } else if (int === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice
}

function playerChoice() {
  let choice
  do {
    choice = window.prompt("What do you choose? (Rock, Paper or Scissors)");
    choice = choice.toLowerCase();
  } while (["rock", "paper", "scissors"].indexOf(choice) == -1)

  return choice
}

function game() {
  rounds = parseInt(window.prompt("How many rounds do you want to play?", ""));
  rounds = Math.abs(rounds);

  let playerPoints = 0
  let computerPoints = 0
  
  for (let i = 0; i < rounds; i++) {
    let result = playRound();

    if (result === "player") {
      playerPoints++;
    } else if (result === "computer") {
      computerPoints++;
    } else {
      i--;
    }
  }

  if (playerPoints > computerPoints) {
    window.alert(`You win! ${playerPoints}-${computerPoints}`)
  } else if (playerPoints === computerPoints) {
    window.alert(`It's a draw! ${playerPoints}-${computerPoints}`)
  } else {
    window.alert(`You lose! ${computerPoints}-${playerPoints}`)
  }
}