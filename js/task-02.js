const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector("#ingredients");

const elements = ingredients.map(element => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");

  return liEl;
});

console.log(elements);

listIngredients.append(...elements);
