const db = require('./knex')

module.exports = {
  getTenant: () => db('tenant'),
  createTenant: (newItem) => db('tenant').insert(newItem),
  editTenant: (id, newItem) => db('tenant').where('id', id).update(newItem, 'id'),
  getSingleTenant: (id) => db('tenant').where('id', id),
  deleteTenant: (id) => db('tenant').where('id', id).del().returning('id')
}
