let counterValue = 0;

const valueEl = document.querySelector("#value");
valueEl.textContent = counterValue;
console.log(valueEl);

const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});

const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
