
exports.up = function(knex, Promise) {
  return knex.schema.createTable('allies', table => {
    table.increments();
    table.integer('professional')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('client')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('allies');
};
