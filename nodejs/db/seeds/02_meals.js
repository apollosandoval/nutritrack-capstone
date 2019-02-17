
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {meal: 'Breakfast', calories: 500, fat: 10, protein: 15, carbs: 20, user: 1},
        {meal: 'Lunch', calories: 700, fat: 11, protein: 16, carbs: 21, user: 1},
        {meal: 'Dinner', calories: 600, fat: 12, protein: 17, carbs: 22, user: 1},
        {meal: 'Snack', calories: 300, fat: 13, protein: 18, carbs: 23, user: 1},
        {meal: 'Snack', calories: 300, fat: 14, protein: 19, carbs: 24, user: 1},
      ]);
    });
};
