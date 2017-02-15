import authRouter from './auth.router';
import recipeRouter from './recipe.router';
import ingredientsRouter from './ingredients.router';

const routingMap = {
  '/api/auth'       : authRouter,
  '/api/recipe'     : recipeRouter,
  '/api/ingredients': ingredientsRouter,
};

export default routingMap;
