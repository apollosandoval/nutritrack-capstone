exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', () => {
    table.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};
