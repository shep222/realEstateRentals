exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('image').del()
        .then(function() {
            // Inserts seed entries
            return knex('image').insert([{
                    id: 1,
                    house_id: 1
                }, {
                    id: 2,
                    house_id: 2

                }, {
                    id: 3,
                    house_id: 3
                }
            ]);
        })
        // .then(function () {
        //   return knex.raw('alter sequence recipe_id_seq restart with 3')
        // })
};
