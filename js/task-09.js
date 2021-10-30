function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const currentBackgroundColor = document.querySelector(".color");
const OurBody = document.querySelector("body");

function onChangeColorBtnClick() {
  OurBody.style.background = getRandomHexColor();
  currentBackgroundColor.textContent = getRandomHexColor();
}
changeColorBtn.addEventListener("click",onChangeColorBtnClick);