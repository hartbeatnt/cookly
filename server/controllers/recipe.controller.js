import { isRequestInvalid } from '../services/validation';
import { Recipe } from '../models';
import { Ingredients } from '../models';
import { RecipeIngredients } from '../models';

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

/**
 *
 *  @route /api/recipe/add
 *
 *  @method {POST}
 *
 *  @body {
 *    name        : STRING
 *    ingredients : ARRAY<{INT, STRING}>
 *    notes       : STRING
 *    arrangements: ARRAY<INT>
 *  }
 */
export const addRecipe = async (req, res) => {
  req.checkBody('name', 'Please provide a recipe name').notEmpty();
  req.checkBody('ingredients', 'Please provide an ingredients list').notEmpty().isArray();
  req.checkBody('notes', 'Please provide notes').notEmpty();
  if (await isRequestInvalid(req, res)) {
    return;
  }
  let recipe;
  const { name, notes, cook_time, ingredients, arrangements } = req.body;
  try {
    /**
     * Since the client is front-loading all the ingredients, I am going
     * to assume that the client will pre-validate all ingredients in the list
     * before sending to the API Router. Otherwise, we will have to add some
     * logic here to ensure that the ingredients exist before creating the joins
     */
    recipe = await Recipe.findOne({
      where: { name } 
    });
    if (recipe) {
      return res.json({
        success: false,
        message: `Recipe with name ${name} already exists!`,
      });
    }
    recipe = await Recipe.create({ 
      name, 
      notes, 
      cook_time,
    })
    
    await Promise.all(ingredients.map(ingredient => {
      RecipeIngredients.create({
        recipeId: recipe.id,
        ingredientId: ingredient.id,
        quantity: ingredient.quantity,
      })
    }).concat(arrangements.map(arrangement => {
      recipe.addDerivative(arrangement)
    })))
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      message: `an error occured. e = ${JSON.stringify(e)}`,
    });
  }
  res.json({
    success: true,
    message: 'created recipe',
    recipe : {
      id: recipe.id,
      name: recipe.name,
      notes: recipe.notes,
      cook_time: recipe.cook_time,
      ingredients,
      arrangements,
    },
  });
};

export const editRecipe = async (req, res) => {

};

export const deleteRecipe = async (req, res) => {

};