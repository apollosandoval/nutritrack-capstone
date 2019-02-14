
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('allies').del()
    .then(function () {
      // Inserts seed entries
      return knex('allies').insert([
        {professional: 4, client: 1},
        {professional: 4, client: 2},
        {professional: 4, client: 3},
      ]);
    });
};
