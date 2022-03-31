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

function computerPlay() {
  int = getRandomIntInclusive(1, 3)
  let hand

  if (int === 1) {
    hand = "rock";
  } else if (int === 2) {
    hand = "paper";
  } else {
    hand = "scissors";
  }
  return hand
}

