import { Router } from 'express';
import { fetchIngredients, createIngredient } from '../controllers/ingredients.controller';

const ingredientsRouter = Router();

ingredientsRouter.get('/', fetchIngredients);
ingredientsRouter.post('/', createIngredient);

export default ingredientsRouter;
