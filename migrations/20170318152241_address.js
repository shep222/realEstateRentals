exports.up = (knex) => {
    return knex.schema.createTable('address', (address) => {
        address.increments()
        address.integer('streetNumber')
        address.varchar('streetName')
        address.integer('zip')
        address.integer('house_id').references('id').inTable('house').onDelete('CASCADE')

    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('address')
};
