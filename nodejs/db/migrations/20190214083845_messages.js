exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', () => {
    table.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
