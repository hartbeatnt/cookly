import { SET_INGREDIENTS } from './types';

const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS,
  ingredients
});

export default setIngredients;
