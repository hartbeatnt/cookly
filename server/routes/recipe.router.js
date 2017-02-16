import { Router } from 'express';
import { 
  getAllRecipes,
  getOneRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
} from '../controllers/recipe.controller';

const recipeRouter = Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getOneRecipe);
recipeRouter.post('/', addRecipe);
recipeRouter.put('/:id', editRecipe);
recipeRouter.delete('/:id', deleteRecipe);

export default recipeRouter;
