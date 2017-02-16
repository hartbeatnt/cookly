import { isRequestInvalid } from '../services/validation';
import { Recipe } from '../models';

/**
 *
 *  @route /api/recipe/add
 *
 *  @method {POST}
 *
 *  @body {
 *    name        : STRING
 *    ingredients : ARRAY<INT>
 *    notes       : STRING
 *    arrangements: ARRAY<INT>
 *  }
 */
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({});
    res.json({
      success: true,
      recipes,
    })
  } catch (e) {
    res.json({
      success: false,
      err    : e.toString(),
    })
  }
};

export const getOneRecipe = async (req, res) => {

};

export const addRecipe = async (req, res) => {
  req.checkBody('name', 'Please provide a recipe name').notEmpty();
  req.checkBody('ingredients', 'Please provide an ingredients list').notEmpty().isArray();
  req.checkBody('notes', 'Please provide notes').notEmpty();
  if (await isRequestInvalid(req, res)) {
    return;
  }

  try {
    const { name, ingredients, notes, arrangements } = req.body;
    let recipe = await Recipe.findOne({ name });
    if (recipe) {
      return res.json({
        success: false,
        message: `Recipe with name ${name} already exists!`,
      });
    }
    recipe = await Recipe.create({ name, ingredients, notes, arrangements });
    res.json({
      success: true,
      message: 'created recipe',
      recipe : recipe.values(),
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      message: `an error occured. e = ${e.toString()}`,
    });
  }
  res.json({
    success: true,
  });
};

export const editRecipe = async (req, res) => {

};

export const deleteRecipe = async (req, res) => {

};