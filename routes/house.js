const router = require('express').Router()
const database = require('../database/houseAPI')
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
const uuid = require('uuid/v4')
const AWS = require('aws-sdk')
AWS.config.update({accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET})
const s3 = new AWS.S3()

router.get('/', (req, res) => {
    database.getHouse()
        .then((house) => {
            res.send(house)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleHouse(req.params.id).then((house) => {
        res.send(house)
    })
})

router.post('/', upload.single('image'),  (req, res) => {
    console.log(req.body);
    database.createHouse(req.body)
        .then(() => {
            res.sendStatus(201)
        })
        .then(()=> {
            let id = uuid()
            let myDate = new Date()
            myDate = myDate.toLocaleTimeString()
            console.log(req);
            s3.putObject({
              Bucket: process.env.S3_BUCKET,
              Key: myDate,
              Body: new Buffer(req.file.buffer)
          }, (err,data) => {
              if (err) {
                console.log(err);
              } else {
                res.json(`{"success": true}`)
                // res.json(data);
                console.log('made it');
              }
            })
            .catch(err => {
                console.log(err);
            })
        })
})

router.patch('/:id', (req, res) => {
    database.editHouse(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteHouse(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
