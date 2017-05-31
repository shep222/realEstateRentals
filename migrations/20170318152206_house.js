exports.up = (knex) => {
    return knex.schema.createTable('house', (house) => {
        house.increments()
        house.integer('bedrooms')
        house.integer('baths')
        house.varchar('available')
        house.varchar('address')
        house.varchar('city')
        house.varchar('state')
        house.integer('zipcode')
        house.varchar('description')
    });
}
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('house')
};
