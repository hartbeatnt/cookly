import Sequelize from 'sequelize';

import sequelize from '../db';

const Recipe = sequelize.define('recipe', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
  notes: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
  cook_time: Sequelize.STRING,
});

export default Recipe;
