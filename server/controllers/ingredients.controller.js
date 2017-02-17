import { isRequestInvalid } from '../services/validation';
import Ingredients from '../models/ingredients.model';


/**
 *
 *  @route /api/ingredients
 *
 *  @method {GET}
 *
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
/**
 *
 *  @route /api/ingredients
 *
 *  @method {POST}
 *
 */

export const createIngredient = async (req, res) => {
  req.checkBody('name', 'Please provide an ingredient name').notEmpty();
  if (await isRequestInvalid(req, res)) {
    return;
  }
  try {
    const { name, name_en } = req.body;
    let ingredient = await Ingredients.findOne({ 
      where: { name } 
    });
    if (ingredient) {
      return res.json({
        success: false,
        message: `Ingredient with name ${name} already exists!`,
      });
    }
    const newIngredient = await Ingredients.create({
      name: name,
      name_en: name_en
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
/**
 *
 *  @route /api/ingredients/:id
 *
 *  @method {DELETE}
 *
 */
export const deleteIngredient = async (req, res) => {
  try {
    const id = req.params.id;
    const ingredientToDelete = await Ingredients.findOne({
      where: { id }
    })
    if (!ingredientToDelete) {
      return res.json({
        success: false,
        message: `cannot delete ingredient ${id} as it does not exist`
      })
    }
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