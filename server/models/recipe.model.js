import Sequelize from 'sequelize';

import sequelize from '../db';

const Recipe = sequelize.define('recipe', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  notes: {
    type     : Sequelize.STRING,
    allowNull: false,
  },
});

export default Recipe;
