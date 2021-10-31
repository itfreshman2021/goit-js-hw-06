function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const listBoxes = document.querySelector("#boxes");
const inputControls = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

function createBoxes(amount) {

  let boxesMarkup = "";

  for (let i = 1; i <= amount; i += 1) {
    boxesMarkup += `<div class="box${i}"></div>`;    
  }

  const result = listBoxes.insertAdjacentHTML("afterbegin", boxesMarkup);
  
  return result;
  
}



inputControls.addEventListener("change", (event) => {
   event.preventDefault(); 
  let amount = event.currentTarget.value;
  
  btnCreate.addEventListener("click", () => {

    createBoxes(amount);

    let currentSize = 30;

    for (let i = 1; i <= amount; i += 1) {

      let currentIdSelector = `.box${i}`;
    
      console.log(currentIdSelector);

      let currentDiv = document.querySelector(`.box${i}`);

      currentDiv.style.width = `${currentSize}px`;
    
      currentDiv.style.height = `${currentSize}px`;
    
      currentDiv.style.backgroundColor = getRandomHexColor();

      currentSize += 10;
  
    }
  });

});

function destroyBoxes() {

  const result = listBoxes.innerHTML = "";
  return result;
}

function onBtnDestroyClick() {
  
  inputControls.value = null;
  destroyBoxes();
  

};

btnDestroy.addEventListener("click", onBtnDestroyClick);