const router = require('express').Router()
const database = require('../database/s3API')
const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fieldNameSize: 255,
      fileSize: 500000,
      files: 1,
      fields: 1
    }
  });
const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

AWS.config.update({accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET})
const s3 = new AWS.S3()




router.get('/', (req, res) => {
    // database.getImage()
    //     .then((tenant) => {
    //         res.send(tenant)
    //     })
    s3.listObjects({Bucket: process.env.S3_BUCKET}, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        res.json({resp})
      }
    })
})

router.get('/:id', (req, res) => {
    database.getS3SingleImage(req.params.id).then((tenant) => {
        res.send(tenant)
    })
})

router.post('/', upload.single('image'),  (req, res) => {
    let id = uuid()
    let myDate = new Date()
    myDate = myDate.toLocaleTimeString()
    s3.putObject({
      Bucket: process.env.S3_BUCKET,
      Key: id,
      Body: new Buffer(req.file.buffer)
    }, err => {
      if (err) {
        console.log(err);
      } else {
        res.json(`{"success": true}`)
        console.log();
      }
    })
})

router.patch('/:id', (req, res) => {
    database.editS3Image(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteS3Image(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
