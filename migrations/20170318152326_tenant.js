exports.up = (knex) => {
    return knex.schema.createTable('tenant', (tenant) => {
        tenant.increments()
        tenant.varchar('f_name')
        tenant.varchar('l_name')
        tenant.integer('house_id').references('id').inTable('house').onDelete('CASCADE')
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('tenant')
};
