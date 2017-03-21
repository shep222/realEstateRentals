const db = require('./knex')

module.exports = {
  getHouse: () => db('house'),
  createHouse: (newItem) => db('house').insert(newItem),
  editHouse: (id, newItem) => db('house').where('id', id).update(newItem, 'id'),
  getSingleHouse: (id) => db('house').where('id', id),
  deleteHouse: (id) => db('house').where('id', id).del().returning('id')
}
