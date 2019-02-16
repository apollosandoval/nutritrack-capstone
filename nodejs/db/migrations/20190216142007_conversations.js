
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conversations', table => {
    table.increments();
    table.string('subject');
    table.integer('message_id');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conversations');
};
