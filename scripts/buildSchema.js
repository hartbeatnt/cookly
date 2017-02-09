export const buildSchema = async (sequelize, force) => {
  try {
    if (force) {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true});
      await sequelize.sync({ force: true });
      console.log('Dropped tables and recreated tables from server/models/');
    } else if (!force && process.argv.length === 2) {
      await sequelize.sync();
      console.log("Created tables from server/models/");
    } else {
      console.error('invalid number of arguments in schema.js. Exiting!');
    }
  } catch (e) {
    console.error('an error occured');
    console.log(e);
  }
  process.exit();
};
