process.env.NODE_ENV = "development";

require('babel-register');
require('babel-polyfill');
var fs = require('fs');
var path = require('path');

var buildSchema = require('./buildSchema').buildSchema;

/**
 *
 *  Schema Utilities:
 *  @param force {string} forcefully drops any existing tables and recreate the schema.
 *
 *  run this as a command line utility:
 *    node ./schema.js
 *    node ./schema.js force
 *
 */
try {
  var pathToDb = path.resolve('server/db.js');
  fs.accessSync(pathToDb, fs.F_OK);
} catch (e) {
  console.error('An error occured. error = ', e);
  console.error('Are you running this script from outside the project root?');
  process.exit();
}

/**
 * 
 *  Require sequelize instance and model definitions
 * 
 *  The ordering of the model definitions can be customized by re-ordering
 *  the export statements within server/models/index.js
 * 
 */
var sequelize = require('../server/db').default;
require('../server/models/');

var force = process.argv[2] === 'force';

buildSchema(sequelize, force);
