import { Router } from 'express';
import { fetchIngredients } from '../controllers/ingredients.controller';

const ingredientsRouter = Router();

ingredientsRouter.get('/', fetchIngredients);

export default ingredientsRouter;
