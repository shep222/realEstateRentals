exports.up = (knex) => {
    return knex.schema.createTable('image', (image) => {
        image.increments()
        image.integer('house_id').references('id').inTable('house').onDelete('CASCADE')
        image.string('imageURL')
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('image')
};
