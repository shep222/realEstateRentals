exports.up = (knex) => {
    return knex.schema.createTable('house', (house) => {
        house.increments()
        house.integer('bedrooms')
        house.integer('baths')
        house.varchar('available')
    });
}
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('house')
};
