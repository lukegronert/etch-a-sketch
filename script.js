const container = document.querySelector(".container");
let gridSize = window.prompt(
  "What size grid do you want? Ex: 10 will give you a 10x10 grid."
);
document.documentElement.style.setProperty("--grid-size", gridSize);
const buildGrid = (size) => {
  let i = 0;
  while (i < size * size) {
    let gridBox = document.createElement("div");
    gridBox.className = "box";
    container.appendChild(gridBox);
    i++;
  }
};

buildGrid(gridSize);
