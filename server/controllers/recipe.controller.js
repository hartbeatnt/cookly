import { isRequestInvalid } from '../services/validation';
import { Recipe } from '../models';
import { Ingredients } from '../models';

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
    const { name, notes, cook_time, ingredients, arrangements } = req.body;
    /**
     * Since the client is front-loading all the ingredients, I am going
     * to assume that the client will pre-validate all ingredients in the list
     * before sending to the API Router. Otherwise, we will have to add some
     * logic here to ensure that the ingredients exist before creating the joins
     */
    let recipe = await Recipe.findOne({
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
      cook_time
    }).then( recipe => {
      ingredients.forEach(ingredient => {
        console.log('!!!!!', ingredient)
        recipe.addIngredients(ingredient.id, {
          through: { quantity: ingredient.quantity}
        }).catch(e=>console.log(e))
      })
    })
    res.json({
      success: true,
      message: 'created recipe',
      recipe : {
        name: 'was',
        notes: 'this',
        cook_time: 'the problem?',
      },
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      message: `an error occured. e = ${JSON.stringify(e)}`,
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