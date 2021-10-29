let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

function onDecrementBtnClick() {
    counterValue += -1;
    valueEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", onIncrementBtnClick);