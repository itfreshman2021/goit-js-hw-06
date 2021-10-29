const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
output.textContent = "Anonymous";
textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});