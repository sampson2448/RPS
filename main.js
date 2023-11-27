function rps(rps) {
  const choices = ["Rock", "Paper", "Scissor"];
  let cpu = Math.floor(Math.random() * 3);
  let cpuChoice = choices[cpu];
  if (rps == "Rock") {
    displayWinner("Rock", cpuChoice);
  } else if (rps == "Paper") {
    displayWinner("Paper", cpuChoice);
  } else if (rps == "Scissor") {
    displayWinner("Scissor", cpuChoice);
  }
}

function displayWinner(a, b) {
  const winner = document.getElementById("winner");
  if (a == "Rock" && b == "Paper") {
    console.log(a + " Loses to " + b + ". You lose");
    winner.innerText = a + " Loses to " + b + ". You lose";
  } else if (a == "Rock" && b == "Scissor") {
    console.log(a + " beats " + b + ". You win");
    winner.innerText = a + " beats " + b + ". You win";
  } else if (a == "Paper" && b == "Rock") {
    console.log(a + " beats " + b + ". You win");
    winner.innerText = a + " beats " + b + ". You win";
  } else if (a == "Scissor" && b == "Paper") {
    console.log(a + " beats " + b + ". You win");
    winner.innerText = a + " beats " + b + ". You win";
  } else if (a == "Paper" && b == "Scissor") {
    console.log(a + " Loses to " + b + ". You Lose");
    winner.innerText = a + " Loses to " + b + ". You Lose";
  } else if (a == "Scissor" && b == "Rock") {
    console.log(a + " Loses to " + b + ". You Lose");
    winner.innerText = a + " Loses to " + b + ". You Lose";
  } else {
    console.log(a, b);
    winner.innerText = "You both picked " + a + ". It's a tie";
  }
}
