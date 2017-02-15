import { Router } from 'express';
import { 
  fetchIngredients, 
  createIngredient,
  deleteIngredient
 } from '../controllers/ingredients.controller';

const ingredientsRouter = Router();

ingredientsRouter.get('/', fetchIngredients);
ingredientsRouter.post('/', createIngredient);
ingredientsRouter.delete('/:id', deleteIngredient);

export default ingredientsRouter;
