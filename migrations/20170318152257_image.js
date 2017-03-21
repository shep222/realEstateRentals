exports.up = (knex) => {
    return knex.schema.createTable('image', (image) => {
        image.increments()
        image.integer('house_id').references('id').inTable('house').onDelete('CASCADE')
        // image.binary('data')
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('image')
};
