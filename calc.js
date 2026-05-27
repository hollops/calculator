const expression = document.getElementById("expression");
const buttons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const erase = document.querySelector("#clr");
const clear = document.querySelector(".del");

let firstNumber = "";
let operator = "";
let lastNumber = "";

for (const button of buttons) {
  button.addEventListener("click", () => {
    expression.textContent += button.textContent;

    if (operator === "") {
      firstNumber += button.textContent;
    } else {
      lastNumber += button.textContent;
    }
  });
}
for (const op of opButtons) {
  op.addEventListener("click", () => {
    operator = op.textContent;
    expression.textContent += operator;
  });
}

equal.addEventListener("click", () => {
  if (operator === "*") {
    expression.textContent = Number(firstNumber) * Number(lastNumber);
  } else if (operator === "+") {
    expression.textContent = Number(firstNumber) + Number(lastNumber);
  } else if (operator === "-") {
    expression.textContent = Number(firstNumber) - Number(lastNumber);
  } else if (operator === "/") {
    expression.textContent = Number(firstNumber) / Number(lastNumber);
  }
});

erase.addEventListener("click", () => {
  expression.textContent = "";
});

clear.addEventListener("click", () => {
  expression.textContent = expression.textContent.slice(0, -1);
});
