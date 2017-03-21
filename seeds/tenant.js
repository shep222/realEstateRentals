exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('tenant').del()
        .then(function() {
            // Inserts seed entries
            return knex('tenant').insert([{
                    id: 1,
                    house_id: 1,
                    f_name: 'J',
                    l_name: 'Shepler'
                }, {
                    id: 2,
                    house_id: 1,
                    f_name: 'Jeremy',
                    l_name: 'Carver'
                }, {
                    id: 3,
                    house_id: 2,
                    f_name: 'Jason',
                    l_name: 'Brannon'
                }, {
                    id: 4,
                    house_id: 3,
                    f_name: 'Sandy',
                    l_name: 'Brannon'
                }, {
                    id: 5,
                    house_id: 3,
                    f_name: 'Grant',
                    l_name: 'Brannon'
                }
            ]);
        })
        // .then(function () {
        //   return knex.raw('alter sequence recipe_id_seq restart with 3')
        // })
};
