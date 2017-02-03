import Sequelize from 'sequelize';

import sequelize from '../db';

const Ingredients = sequelize.define('ingredients', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  name_jp: {
    type: Sequelize.STRING,
  },
});

export default Ingredients;
