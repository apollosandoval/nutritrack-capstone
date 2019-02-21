exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('institution').defaultTo(null);
    table.boolean('pro').defaultTo(false);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
