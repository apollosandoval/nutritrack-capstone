// sets environment to be used by knex
var environment = process.env.NODE_ENV || 'development';
// configure knex environment to use environment type
var config = require('../knexfile.js')[environment];
// bring in the knex module and pass in our config tpe to setup the connection to the database.
module.exports = require('knex')(config);