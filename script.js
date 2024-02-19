//  intially taking both scores as 0
let userScore = 0;
let compScore = 0;

// accessing from html
const choices = document.querySelectorAll(".image");
const msg = document.querySelector(".msg");
const body = document.querySelector("body");
const us = document.querySelector("#player-s");
const cs = document.querySelector("#comp-s");


// generating computer choice
const compChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randINdx = [Math.floor(Math.random() * 3)];
  return options[randINdx];
};

const draw = () => {
  console.log("Game was Draw");
  msg.innerText = "It's a Draw!....Play Again!";
  body.style.backgroundColor = "yellow";
  us.style.color = "black";
  cs.style.color = "black";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    us.innerText = userScore;
    console.log("You win!!");
    msg.innerText = "You win!";
    body.style.backgroundColor = "green";
  } else {
    compScore++;
    cs.innerText = compScore;
    console.log("You lost!!");
    msg.innerText = "You Lost!";
    body.style.backgroundColor = "red";

    compScore++;
  }
};

// secondly comparing the computer choice and user choice

const playGame = (userChoice) => {
  const computerChoice = compChoice();

  if (computerChoice == userChoice) {
    draw();
  } else {
    let userWin = true;  //taking a variable  for intial choice a true
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userChoice = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

// first we select the choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
