import { promisify } from 'bluebird';
import Ingredients from '../models/ingredients.model';


/**
 *
 *  @route /api/ingredients
 *
 *  @method {GET}
 *
 *  DUMMY DATA: FIX LATER
 */
export const fetchIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll({});
    res.json({
      success: true,
      ingredients
    });
  } catch (e) {
    res.json({
      success: false,
      err    : e.toString(),
    });
  }
};

export const createIngredient = async (req, res) => {
  
}