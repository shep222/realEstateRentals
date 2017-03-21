const db = require('./knex')

module.exports = {
  getAddress: () => db('address'),
  createAddress: (newItem) => db('address').insert(newItem),
  editAddress: (id, newItem) => db('address').where('id', id).update(newItem, 'id'),
  getSingleAddress: (id) => db('address').where('id', id),
  deleteAddress: (id) => db('address').where('id', id).del().returning('id')
}
