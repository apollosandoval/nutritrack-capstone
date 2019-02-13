
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Oscar Sandoval', email: 'oscar@email.com'},
        {id: 2, name: 'Jennifer Nummerdor', email: 'jen@email.com'},
        {id: 3, name: 'Chris Christopherson', email: 'chris@email.com'},
        {id: 4, name: 'Joe Trainer', email: 'broski@email.com', pro: true}
      ]);
    });
};
