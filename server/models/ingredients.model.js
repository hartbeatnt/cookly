import Sequelize from 'sequelize';

import sequelize from '../db';

const Ingredients = sequelize.define('ingredients', {
  name: {
    type     : Sequelize.STRING,
    allowNull: false,
    unique   : true,
  },
  name_en: {
    type: Sequelize.STRING,
  },
});

export default Ingredients;
