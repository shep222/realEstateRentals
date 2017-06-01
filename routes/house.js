const router = require('express').Router()
const database = require('../database/houseAPI')
const upload = require('multer')()


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
    database.createHouse(req.body)
        .then(() => {
            res.sendStatus(201)
        })
        .then(()=> {
            let id = uuid()
            let myDate = new Date()
            myDate = myDate.toLocaleTimeString()
            s3.putObject({
              Bucket: process.env.S3_BUCKET,
              Key: id,
              Body: new Buffer(req.file.buffer)
          }, (err,data) => {
              if (err) {
                console.log(err);
module.exports = router
