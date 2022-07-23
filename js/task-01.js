const categories = document.querySelectorAll(".item");
const categoriesNumber = `Number of categories: ${categories.length}`;
console.log(categoriesNumber);

for (const title of categories) {
  console.log(`Category:`, title.firstElementChild.textContent);
  console.log(`Elements:`, title.lastElementChild.children.length);
}
