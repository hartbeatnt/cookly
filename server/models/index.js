import Sequelize from 'sequelize';

import sequelize from '../db';
import User from './user.model';
import Ingredients from './ingredients.model';
import Recipe from './recipe.model';

// self referential many-to-many for arrangements (derivative recipes)
Recipe.belongsToMany(Recipe, {
  as     : 'derivative',
  through: 'arrangements',
});

// recipe-ingredients join
const RecipeIngredients = sequelize.define('RecipeIngredients', {
  quantity: {
    type     : Sequelize.INTEGER,
    allowNull: false,
  },
});
Recipe.belongsToMany(Ingredients, { through: RecipeIngredients });
Ingredients.belongsToMany(Recipe, { through: RecipeIngredients });

export {
  User,
  Ingredients,
  Recipe,
};
