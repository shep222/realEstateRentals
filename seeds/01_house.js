exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('house').del()
        .then(function() {
            // Inserts seed entries
            return knex('house').insert([{
                    id: 1,
                    bedrooms: 3,
                    baths: 2,
                    available: 'y'
                }, {
                    id: 2,
                    bedrooms: 2,
                    baths: 1,
                    available: 'y'
                }, {
                    id: 3,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n'
                }
            ]);
        })
        // .then(function () {
        //   return knex.raw('alter sequence recipe_id_seq restart with 3')
        // })
};
