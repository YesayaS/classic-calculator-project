const operationDisplay = document.querySelector(".operation");
const resultDisplay = document.querySelector(".result");
const operator = ["/", "x", "+", "-"];

getButtonKey();

let maxLength = 11;
let toCalculate = ["0", "", "0"];
let toCalculateIndex = 0;
let reset = false;

function updateDisplay() {
  operationDisplay.innerHTML = toCalculate[0] + " " + toCalculate[1];
  resultDisplay.innerHTML =
    toCalculateIndex === 0 ? toCalculate[0] : toCalculate[2];
  if (resultDisplay.innerHTML.length > maxLength) {
    resultDisplay.innerHTML = "Too Long :(";
  }
}

function storeVariable(key) {
  if (toCalculate[0] === Infinity) {
    toCalculate[0] = "0";
    toCalculateIndex = 0;
  }
  if (reset) {
    toCalculate = ["0", "", "0"];
    toCalculateIndex = 0;
    reset = false;
  }

  if (!isNaN(key)) {
    handleNumber(key);
  } else if (operator.includes(key)) {
    operate();
    toCalculateIndex = 2;
    toCalculate[1] = key;
  } else {
    otherOperate(key);
  }
}

function handleNumber(key) {
  if (toCalculate[toCalculateIndex].length < maxLength) {
    toCalculate[toCalculateIndex] === "0"
      ? (toCalculate[toCalculateIndex] = key)
      : (toCalculate[toCalculateIndex] += key);
  }
}

function otherOperate(key) {
  switch (key) {
    case "=":
      operate();
      toCalculate = ["&nbsp", "", toCalculate[0]];
      reset = true;
      break;
    case "c":
      toCalculate = ["0", "", "0"];
      toCalculateIndex = 0;
      break;
    case "ce":
      toCalculate[toCalculateIndex] = "0";
      break;
    case "back":
      toCalculate[toCalculateIndex] = toCalculate[toCalculateIndex].slice(
        0,
        -1
      );
      toCalculate[toCalculateIndex] =
        toCalculate[toCalculateIndex] === ""
          ? "0"
          : toCalculate[toCalculateIndex];
      break;
    case "+/-":
      break;
    case ".":
      if (!toCalculate[toCalculateIndex].includes(".")) {
        toCalculate[toCalculateIndex] += key;
      }
      break;
  }
}

function operate() {
  var result = 0;
  switch (toCalculate[1]) {
    case "+":
      result = parseFloat(toCalculate[0]) + parseFloat(toCalculate[2]);
      toCalculate[0] = parseFloat(result);
      break;
    case "-":
      result = parseFloat(toCalculate[0]) - parseFloat(toCalculate[2]);
      toCalculate[0] = parseFloat(result);
      break;
    case "x":
      result = parseFloat(toCalculate[0]) * parseFloat(toCalculate[2]);
      toCalculate[0] = parseFloat(result);
      break;
    case "/":
      result = parseFloat(toCalculate[0]) / parseFloat(toCalculate[2]);
      toCalculate[0] = parseFloat(result);
      break;
  }
  toCalculate[2] = "0";
}

function getButtonKey() {
  const buttonsContainer = document.querySelectorAll(".button-key");
  buttonsContainer.forEach((button) => {
    button.addEventListener("click", () => {
      storeVariable(button.dataset.key);
      updateDisplay();
      console.log(button.dataset.key, toCalculate, toCalculateIndex);
    });
  });
}
