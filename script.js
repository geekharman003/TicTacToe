let winnerName = document.querySelector("#winner-name");

let selectedX = document.querySelector("#select-x");

let selectedO = document.querySelector("#select-zero");

let selected;
let inputArea = document.querySelectorAll(".input-area");

let restartBtn = document.querySelector("#restart-btn");

// let winningConditions = [
//   [0, 4, 8],
//   [2, 4, 6],
//   [1, 4, 7],
//   [3, 4, 5],
// ];

selectedX.addEventListener("click", function () {
  selectedX.classList.add("selected");
  selectedO.classList.remove("selected");
  selectedO.style.pointerEvents = "none";
  selected = "X";
  inputArea.forEach(function (item) {
    item.style.pointerEvents = "auto";
  });
  selectedX.style.border = "5px solid #2b2243";
  selectedO.style.border = "none";
});

selectedO.addEventListener("click", function () {
  selectedO.classList.add("selected");
  selectedX.classList.remove("selected");
  selectedX.style.pointerEvents = "none";
  selected = "O";
  inputArea.forEach(function (item) {
    item.style.pointerEvents = "auto";
  });

  selectedO.style.border = "5px solid #2b2243";
  selectedX.style.border = "none";
});

inputArea.forEach((item) => {
  item.addEventListener("click", function () {
    item.textContent = selected;
    item.style.color = selected === "X" ? "#1892EA" : "#A737FF";
    winningCheck();
  });
});

function randomNumberGenerator() {
  let x = Math.floor(Math.random() * 9 + 0);
  return x;
}

function inputFiller() {
  let value = randomNumberGenerator();
  if (inputArea[value].textContent === "") {
    inputArea[value].textContent = selected === "X" ? "O" : "X";
    inputArea[value].style.color = selected === "X" ? "#A737FF" : "#1892EA";
  } else {
    for (let i = 0; i < inputArea.length; i++) {
      if (inputArea[i].textContent === "") {
        inputArea[i].textContent = selected === "X" ? "O" : "X";
        inputArea[i].style.color = selected === "X" ? "#A737FF" : "#1892EA";
        break;
      }
    }
  }
}

function winningCheck() {
  if (
    inputArea[0].textContent === "X" &&
    inputArea[1].textContent === "X" &&
    inputArea[2].textContent === "X"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[1].style.backgroundColor = "#2A2343";
    inputArea[2].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[3].textContent === "X" &&
    inputArea[4].textContent === "X" &&
    inputArea[5].textContent === "X"
  ) {
    inputArea[3].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[5].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[6].textContent === "X" &&
    inputArea[7].textContent === "X" &&
    inputArea[8].textContent === "X"
  ) {
    inputArea[6].style.backgroundColor = "#2A2343";
    inputArea[7].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[0].textContent === "X" &&
    inputArea[3].textContent === "X" &&
    inputArea[6].textContent === "X"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[3].style.backgroundColor = "#2A2343";
    inputArea[6].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[1].textContent === "X" &&
    inputArea[4].textContent === "X" &&
    inputArea[7].textContent === "X"
  ) {
    inputArea[1].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[7].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[2].textContent === "X" &&
    inputArea[5].textContent === "X" &&
    inputArea[8].textContent === "X"
  ) {
    inputArea[2].style.backgroundColor = "#2A2343";
    inputArea[5].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[0].textContent === "X" &&
    inputArea[4].textContent === "X" &&
    inputArea[8].textContent === "X"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[2].textContent === "X" &&
    inputArea[4].textContent === "X" &&
    inputArea[6].textContent === "X"
  ) {
    inputArea[2].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[6].style.backgroundColor = "#2A2343";
    winnerName.textContent = "X Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[0].textContent === "O" &&
    inputArea[1].textContent === "O" &&
    inputArea[2].textContent === "O"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[1].style.backgroundColor = "#2A2343";
    inputArea[2].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[3].textContent === "O" &&
    inputArea[4].textContent === "O" &&
    inputArea[5].textContent === "O"
  ) {
    inputArea[3].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[5].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[6].textContent === "O" &&
    inputArea[7].textContent === "O" &&
    inputArea[8].textContent === "O"
  ) {
    inputArea[6].style.backgroundColor = "#2A2343";
    inputArea[7].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[0].textContent === "O" &&
    inputArea[3].textContent === "O" &&
    inputArea[6].textContent === "O"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[3].style.backgroundColor = "#2A2343";
    inputArea[6].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[1].textContent === "O" &&
    inputArea[4].textContent === "O" &&
    inputArea[7].textContent === "O"
  ) {
    inputArea[1].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[7].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[2].textContent === "O" &&
    inputArea[5].textContent === "O" &&
    inputArea[8].textContent === "O"
  ) {
    inputArea[2].style.backgroundColor = "#2A2343";
    inputArea[5].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[0].textContent === "O" &&
    inputArea[4].textContent === "O" &&
    inputArea[8].textContent === "O"
  ) {
    inputArea[0].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[8].style.backgroundColor = "#2A2343";
    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else if (
    inputArea[2].textContent === "O" &&
    inputArea[4].textContent === "O" &&
    inputArea[6].textContent === "O"
  ) {
    inputArea[2].style.backgroundColor = "#2A2343";
    inputArea[4].style.backgroundColor = "#2A2343";
    inputArea[6].style.backgroundColor = "#2A2343";

    winnerName.textContent = "O Wins";
    inputArea.forEach(function (item) {
      item.style.pointerEvents = "none";
    });
  } else {
    setTimeout(() => {
      inputFiller();
    }, 500);
  }
}

restartBtn.addEventListener("click", () => {
  inputArea.forEach(function (item) {
    item.textContent = "";
    item.style.backgroundColor = "#171229";
    selected = "";
    selectedX.style.pointerEvents = "auto";
    selectedX.style.border = "0";
    selectedO.style.pointerEvents = "auto";
    selectedO.style.border = "0";
    item.style.pointerEvents = "none";
    winnerName.textContent = "Choose";
  });
});
