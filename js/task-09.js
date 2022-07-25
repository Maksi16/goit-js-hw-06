const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
