import Sequelize from 'sequelize';

import sequelize from '../db';

const Recipe = sequelize.define('recipe', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
  name_jp: {
    type: Sequelize.STRING,
  },
  notes: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
  cook_time: Sequelize.STRING,
});

export default Recipe;
