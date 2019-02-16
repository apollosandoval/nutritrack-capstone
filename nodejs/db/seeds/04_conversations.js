
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversations').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversations').insert([
        {subject: 'Hey!', message_id: 1},
        {subject: 'Hey!', message_id: 2},
        {subject: 'Hey!', message_id: 3},
      ]);
    });
};
