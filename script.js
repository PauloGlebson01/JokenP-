// Seletores dos elementos
const resultText = document.querySelector(".result");
const yourScoreText = document.querySelector(".your-score span");
const machineScoreText = document.querySelector(".machine-score span");
const resetBtn = document.getElementById("reset");

let yourScore = 0;
let machineScore = 0;

// Função principal para jogar
function playHuman(humanChoice) {
  const choices = ["rock", "paper", "scissors"];
  const machineChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (humanChoice === machineChoice) {
    result = `Empate! Você e a Alexa escolheram ${translate(humanChoice)}.`;
  } else if (
    (humanChoice === "rock" && machineChoice === "scissors") ||
    (humanChoice === "paper" && machineChoice === "rock") ||
    (humanChoice === "scissors" && machineChoice === "paper")
  ) {
    yourScore++;
    result = `Você venceu! ${translate(humanChoice)} ganha de ${translate(machineChoice)}.`;
  } else {
    machineScore++;
    result = `Alexa venceu! ${translate(machineChoice)} ganha de ${translate(humanChoice)}.`;
  }

  // Atualiza texto e placar
  resultText.textContent = result;
  yourScoreText.textContent = yourScore;
  machineScoreText.textContent = machineScore;
}

// Traduz jogadas para português
function translate(choice) {
  switch (choice) {
    case "rock":
      return "Pedra ✊";
    case "paper":
      return "Papel ✋";
    case "scissors":
      return "Tesoura ✌️";
    default:
      return choice;
  }
}

// Função para resetar o jogo
resetBtn.addEventListener("click", () => {
  yourScore = 0;
  machineScore = 0;
  resultText.textContent = "Jogo resetado! Vamos jogar novamente.";
  yourScoreText.textContent = yourScore;
  machineScoreText.textContent = machineScore;
});
