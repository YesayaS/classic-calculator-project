createButtons();

function createButtons() {
  const buttonsToCreate = [
    "ce",
    "c",
    "back",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  const buttonsContainer = document.querySelector(".buttons-container");
  let buttonsIndex = 0;
  for (let i = 0; i < 5; i++) {
    const hGrid = document.createElement("div");
    hGrid.classList.add("h-grid");
    for (let j = 0; j < 4; j++) {
      const button = document.createElement("button");
      button.innerHTML = buttonsToCreate[buttonsIndex].toUpperCase();
      button.dataset.key = buttonsToCreate[buttonsIndex];
      button.classList.add("button-key");
      hGrid.appendChild(button);
      buttonsIndex++;
    }
    buttonsContainer.appendChild(hGrid);
  }
}

document.querySelector(`[data-key="+/-"]`).disabled = true;
