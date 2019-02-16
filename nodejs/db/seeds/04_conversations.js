
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversations').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversations').insert([
        {subject: 'Hey!', from: 1, to: 4},
      ]);
    });
};
