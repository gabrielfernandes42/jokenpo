const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

const player = document.querySelector("#player");
const computerResult = document.querySelector("#computer");
const result = document.querySelector("#result");

const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";

let choice;

rockBtn.addEventListener("click", () => {
  const r = randomString();
  choice = rock;
  player.textContent = choice;
  if (r == rock) {
    return (result.textContent = "Draw!");
  } else if (r == paper) {
    return (result.textContent = "Loss!");
  } else {
    return (result.textContent = "Win!");
  }
});

paperBtn.addEventListener("click", () => {
  const r = randomString();
  choice = paper;
  player.textContent = choice;
  if (r == paper) {
    return (result.textContent = "Draw!");
  } else if (r == rock) {
    return (result.textContent = "Win!");
  } else {
    return (result.textContent = "Loss!");
  }
});

scissorBtn.addEventListener("click", () => {
  const r = randomString();
  choice = scissor;
  player.textContent = choice;
  if (r == scissor) {
    return (result.textContent = "Draw!");
  } else if (r == paper) {
    return (result.textContent = "Win!");
  } else {
    return (result.textContent = "Loss!");
  }
});

function randomString() {
  const computer = [rock, paper, scissor];

  const random = computer[Math.floor(Math.random() * computer.length)];

  return (computerResult.textContent = random);
}

