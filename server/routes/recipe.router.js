import { Router } from 'express';
import { addRecipe } from '../controllers/recipe.controller';

const recipeRouter = Router();

recipeRouter.post('/add', addRecipe);

export default recipeRouter;
