const db = require('./knex')

module.exports = {
  getImage: () => db('s3'),
  createImage: (newItem) => db('s3').insert(newItem),
  editImage: (id, newItem) => db('s3').where('id', id).update(newItem, 'id'),
  getSingleImage: (id) => db('s3').where('id', id),
  deleteImage: (id) => db('s3').where('id', id).del().returning('id')
}
