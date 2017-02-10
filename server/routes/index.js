import authRouter from './auth.router';
import recipeRouter from './recipe.router';

const routingMap = {
  '/api/auth'  : authRouter,
  '/api/recipe': recipeRouter,
};

export default routingMap;
