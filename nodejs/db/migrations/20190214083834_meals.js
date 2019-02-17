exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', table => {
    table.increments();
    table.string('meal');
    table.integer('calories');
    table.integer('fat');
    table.integer('protein');
    table.integer('carbs');
    table.date('date').defaultTo(knex.fn.now());
    table.integer('user')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};
