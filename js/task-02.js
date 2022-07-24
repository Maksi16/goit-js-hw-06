const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientList = document.querySelector("#ingredients");

const ingredientElem = [];
for (const ingredient of ingredients) {
  const element = ingredient;

  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");

  ingredientElem.push(liEl);
}

ingredientList.append(...ingredientElem);
console.log(ingredientList);
