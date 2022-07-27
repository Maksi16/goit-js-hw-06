function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBox: document.querySelector("#boxes"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  inputEl: document.querySelector("input"),
};

refs.btnCreate.addEventListener("click", onClickCreateBtn);
// refs.btnDestroy.addEventListener("click", onClickDestroyBtn);
// refs.inputEl.addEventListener("input", onChangeInput);
function onChangeInput(event) {
  amount = event.currentTarget.vaule;
  console.log(onChangeInput);
}
function createBoxes(amount) {
  // const divCreate = document.createElement("div");
  // amount = divNumbr;
  // refs.divBox.append(divCreate);
}
function onClickCreateBtn(event) {
  // const divNumbr = event.currentTarget.vaule;
  const divCreate = document.createElement("div");
  divCreate.style.width = "30px";
  divCreate.style.height = "30px";
  console.log(onClickCreateBtn);
}
