const cards = document.querySelectorAll(".card-top");
const ingredientsOnHover = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseover', listIngredients);
    card.addEventListener('mouseout', removeList);
  });
};

const listIngredients = (event) => {
  const ingredientList = event.currentTarget.querySelector('.ingredient-list');
  ingredientList.style.opacity = "1";
};

const removeList = (event) => {
  const ingredientList = event.currentTarget.querySelector('.ingredient-list');
  ingredientList.style.opacity = "0";
};

export { ingredientsOnHover };
