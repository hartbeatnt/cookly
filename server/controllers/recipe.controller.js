import { isRequestInvalid } from '../services/validation';
import { Recipe } from '../models';
import { Ingredients } from '../models';
import { RecipeIngredients } from '../models';

/**
 *
 *  @route /api/recipe
 *
 *  @method {GET}
 *
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
/**
 *
 *  @route /api/recipe/:id
 *
 *  @method {GET}
 *
 */
export const getOneRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({
      where: {id: req.params.id},
      include: [Ingredients, {
        model: Recipe,
        as: "derivative"
      }]
    })
    res.json({
      success: true,
      recipe,
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
 *  @route /api/recipe
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
  const { name, notes, cook_time, ingredients, arrangements } = req.body;
  try {
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
      cook_time,
    })
    
    try {
      await Promise.all(
        ingredients.map(ingredient => {
          return RecipeIngredients.create({
            recipeId: recipe.id,
            ingredientId: ingredient.id,
            quantity: ingredient.quantity,
          })
        }).concat(
        arrangements.map(arrangement => {
          return recipe.addDerivative(arrangement)
        })
      ))
    } catch (e) {
      let recipeToDelete = await Recipe.findOne({
        where: {id: recipe.id}
      })
      const deletedRecipe = await recipeToDelete.destroy()
      return res.json({
        success: false,
        message: `an error occured -- deleting recipe ${recipe.id}. e = ${e.toString()}`,
      })
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
  } catch (e) {
    res.json({
      success: false,
      message: `an error occured. e = ${e.toString()}`,
    });
  }
};
/**
 *
 *  @route /api/recipe/:id
 *
 *  @method {PUT}
 * 
 *  @body {
 *    name        : STRING
 *    ingredients : ARRAY<{INT, STRING}>
 *    notes       : STRING
 *    arrangements: ARRAY<INT>
 *  }
 *
 */
export const editRecipe = async (req, res) => {
  try {
    let recipe = await Recipe.findOne({
      where: {id: req.params.id}
    })
    for (var key in req.body) {
      // lets do some validating?
      // also add ability to update ingredients/arrangements
      recipe[key] = req.body[key]
    }
    recipe = await recipe.save()
    res.json({
      success: true,
      recipe,
    })
  } catch (e) {
    res.json({
      success: false,
      message: `an error occured. e = ${JSON.stringify(e)}`,
    })
  }
};
/**
 *
 *  @route /api/recipe/:id
 *
 *  @method {DELETE}
 *
 */
export const deleteRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const recipeToDelete = await Recipe.findOne({
      where: { id }
    })
    if (!recipeToDelete) {
      return res.json({
        success: false,
        message: `cannot delete recipe ${id} as it does not exist`
      })
    }
    const deletedRecipe = await recipeToDelete.destroy()
    res.json({
      success: true,
      deletedRecipe
    })
  } catch(e) {
    res.json({
      success: false,
      err    : e.toString()
    })
  }
};