const inputValid = document.querySelector("#validation-input");

inputValid.addEventListener("blur", colorBorderIput);

function colorBorderIput(event) {
  const textLength = inputValid.dataset.length;

  if (event.currentTarget.value.length == Number(textLength)) {
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  } else {
    inputValid.classList.add("invalid");
    inputValid.classList.remove("valid");
  }
}
