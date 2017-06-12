exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('house').del()
        .then(function() {
            // Inserts seed entries
            return knex('house').insert([{
                    id: 1,
                    bedrooms: 3,
                    baths: 2,
                    available: 'y',
                    address: '9411 Smokewood Dr',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36695,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg',
                    price: 300

                }, {
                    id: 2,
                    bedrooms: 2,
                    baths: 1,
                    available: 'y',
                    address: '824 Lisa Ct',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36695,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg',
                    price: 400
                }, {
                    id: 3,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n',
                    address: '9609 Royalwoods Dr E',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36608,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg',
                    price: 500
                }, {
                    id: 4,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n',
                    address: '710 Wilshire Ln',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36609,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg',
                    price: 550
                }, {
                    id: 5,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n',
                    address: '9660 Royalwoods Dr North',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36608,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg',
                    price: 600
                }, {
                    id: 6,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n',
                    address: '8571 Ashley Dr',
                    city: 'Eight Mile',
                    state: 'Alabama',
                    zipcode: 36571,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house6.png',
                    price: 700
                }, {
                    id: 7,
                    bedrooms: 5,
                    baths: 2,
                    available: 'n',
                    address: '959 Kenny St',
                    city: 'Mobile',
                    state: 'Alabama',
                    zipcode: 36606,
                    description: 'This house is a beautiful antique on a corner lot',
                    imageURL:'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg',
                    price: 750
                }
            ]);
        })
        .then(function () {
          return knex.raw('alter sequence house_id_seq restart with 8')
        })
};
