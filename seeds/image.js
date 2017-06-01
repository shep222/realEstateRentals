exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('image').del().then(function() {
        // Inserts seed entries
        return knex('image').insert([
            {
                id: 1,
                house_id: 1,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg'
            }, {
                id: 2,
                house_id: 2,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg'
            }, {
                id: 3,
                house_id: 3,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg'
            }, {
                id: 4,
                house_id: 4,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg'
            }, {
                id: 5,
                house_id: 5,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg'
            }, {
                id: 6,
                house_id: 6,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house6.jpg'
            }, {
                id: 7,
                house_id: 7,
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg'
            }
        ]);
    })
    .then(function () {
      return knex.raw('alter sequence image_id_seq restart with 8')
    })
};
