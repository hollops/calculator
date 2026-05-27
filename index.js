const expression = document.getElementById("expression");
const buttons = document.querySelectorAll(".num");
const equal = document.getElementById("equal");

for (const button of buttons) {
  button.addEventListener("click", () => {
    expression.textContent += button.textContent;
  });
}

equal.addEventListener("click", () => {
  expression.textContent = eval(expression.textContent);
});
