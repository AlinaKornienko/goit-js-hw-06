const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const createIngredientsList = options => {
  return options.map(option => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = option;
  
    return ingredientItem;
    });
};
const elements = createIngredientsList(ingredients);
ingredientsEl.append(...elements);