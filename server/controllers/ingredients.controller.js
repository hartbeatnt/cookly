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
      ingredients,
    });
  } catch (e) {
    res.json({
      success: false,
      err    : e.toString(),
    });
  }
};

export const createIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredients.create({
      name: req.body.name,
      name_en: req.body.name_en
    })
    res.json({
      success: true,
      newIngredient,
    })
  } catch (e) {
    res.json({
      success: false,
      err    : e.toString(),
    })
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    const ingredientToDelete = await Ingredients.findOne({
      where: {id: req.params.id}
    })
    const deletedIngredient = await ingredientToDelete.destroy()
    res.json({
      success: true,
      deletedIngredient
    })
  } catch(e) {
    res.json({
      success: false,
      err    : e.toString()
    })
  }
}