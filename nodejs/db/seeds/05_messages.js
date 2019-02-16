
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {conversation_id: 1, from: 1, to: 4, content: 'Hey Joe, I just wanted to introduce myself. I look forward to working with you!'},
        {conversation_id: 1, from: 4, to: 1, content: "Bro, I'm so psyched!"},
        {conversation_id: 1, from: 1, to: 4, content: "Whoa, 'Broski' turn it down."},
      ]);
    });
};
