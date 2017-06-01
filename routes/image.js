const router = require('express').Router()
const database = require('../database/imageAPI')
const upload = require('multer')()
const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

AWS.config.update({accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET})
const s3 = new AWS.S3()




// router.get('/', (req, res) => {
//     // database.getImage()
//     //     .then((tenant) => {
//     //         res.send(tenant)
//     //     })
//     s3.listObjects({Bucket: process.env.S3_BUCKET}, (err, resp) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json({resp})
//       }
//     })
// })
router.get('/', (req, res) => {
    database.getImage()
        .then((image) => {
            res.send(image)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleImage(req.params.id).then((tenant) => {
        res.send(tenant)
    })
})

router.post('/', upload.single('image'),  (req, res) => {
    // database.createImage(req.body)
    //     .then(() => {
    //         res.sendStatus(201)
    //
    let id = uuid()
    let myDate = new Date()
    myDate = myDate.toLocaleTimeString()
    s3.putObject({
      Bucket: process.env.S3_BUCKET,
      Key: myDate,
      Body: new Buffer(req.file.buffer)
  }, (err,data) => {
      if (err) {
        console.log(err);
      } else {
        // res.json(`{"success": true}`)
        res.json(data);
        console.log('made it');
      }
    })
})

router.patch('/:id', (req, res) => {
    database.editImage(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteImage(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
