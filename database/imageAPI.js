const db = require('./knex')

module.exports = {
  getS3Image: () => db('s3'),
  createS3Image: (newItem) => db('s3').insert(newItem),
  edits3Image: (id, newItem) => db('s3').where('id', id).update(newItem, 'id'),
  getS3SingleImage: (id) => db('s3').where('id', id),
  deleteS3Image: (id) => db('s3').where('id', id).del().returning('id')
}
