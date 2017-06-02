const db = require('./knex')

module.exports = {
  getImageURL: () => db('image'),
  createImageURL: (newItem) => db('image').insert(newItem),
  editImageURL: (id, newItem) => db('image').where('id', id).update(newItem, 'id'),
  getSingleImageURL: (id) => db('image').where('id', id),
  deleteImageURL: (id) => db('image').where('id', id).del().returning('id')
}
