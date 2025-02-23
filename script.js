const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");

const buildGrid = () => {
  let gridSize = window.prompt(
    "What size grid do you want? Ex: 10 will give you a 10x10 grid."
  );
  document.documentElement.style.setProperty("--grid-size", gridSize);
  let i = 0;
  while (i < gridSize * gridSize) {
    let gridBox = document.createElement("div");
    gridBox.className = "box";
    container.appendChild(gridBox);
    i++;
  }
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseenter", () => {
      box.classList.add("active");
    })
  );
};

const resetGrid = () => {
  let oldGrid = container.querySelectorAll(".box");
  oldGrid.forEach((box) => box.remove());
  buildGrid();
};

buildGrid();

resetBtn.addEventListener("click", resetGrid);
