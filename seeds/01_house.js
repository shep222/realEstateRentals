exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('house').del().then(function() {
        // Inserts seed entries
        return knex('house').insert([
            {
                id: 1,
                bedrooms: 3,
                baths: 2,
                available: 'y',
                address: '9411 Smokewood Dr',
                city: 'Mobile',
                state: 'Alabama',
                zipcode: 36695,
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house1.jpg',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house2.jpg',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house3.jpg',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house4.jpg',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house5.jpg',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house6.png',
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
                description: "Photos Coming soon!! This is an awesome 1 bed 1 bath home! Open floor plan. Clean kitchen. Balcony off of the dining area. Fireplace in the living room makes for warm and cozy winter evenings. Master bedroom has a walk-in closet. W/D in basement. It's warm,comfortable,easy on the eyes and it just feels good when you walk in. There is a 1 car garage underneath - walkout. It is surrounded by the beautiful Lake Arbor Golf Course. Standley Lake is just biking distance away. Easy access to any shopping/dining you need. Though easy access to Wadsworth,you never hear the traffic; it's living in a secluded,quiet community. Lovely,considerate neighbors.",
                imageURL: 'https://s3-us-west-1.amazonaws.com/realestate222/house7.jpg',
                price: 750
            }
        ]);
    }).then(function() {
        return knex.raw('alter sequence house_id_seq restart with 8')
    })
};
