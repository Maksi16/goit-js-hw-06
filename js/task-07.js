const inputEl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

inputEl.addEventListener("input", onInputChangeSize);

function onInputChangeSize(event) {
  textFontSize.style.fontSize = inputEl.value + "px";
  console.log(inputEl.value);
}
