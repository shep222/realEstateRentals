const db = require('./knex')

module.exports = {
  getImage: () => db('image'),
  createImage: (newItem) => db('image').insert(newItem),
  editImage: (id, newItem) => db('image').where('id', id).update(newItem, 'id'),
  getSingleImage: (id) => db('image').where('id', id),
  deleteImage: (id) => db('image').where('id', id).del().returning('id')
}
