
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments();
    table.integer('conversation_id')
      .notNullable()
      .references('id')
      .inTable('conversations')
      .onDelete('CASCADE')
      .index();
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
    table.string('content');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
