
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conversations', table => {
    table.increments();
    table.string('subject').defaultTo('No Subject');
    table.integer('from')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('to')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conversations');
};
