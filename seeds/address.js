exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('address').del()
        .then(function() {
            // Inserts seed entries
            return knex('address').insert([{
                    id: 1,
                    streetNumber: 2982,
                    streetName: 'S. Zenobia',
                    zip: 80236,
                    house_id: 1
                }, {
                    id: 2,
                    streetNumber: 1234,
                    streetName: 'mystreet',
                    zip: 36695,
                    house_id: 2
                }, {
                    id: 3,
                    streetNumber: 9876,
                    streetName: 'Airport Blvd',
                    zip: 36609

                }
            ]);
        })
        // .then(function () {
        //   return knex.raw('alter sequence recipe_id_seq restart with 3')
        // })
};
