const router = require('express').Router()
const database = require('../database/imageURLAPI')

router.get('/', (req, res) => {
    database.getImageURL()
        .then((house) => {
            res.send(house)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleImageURL(req.params.id).then((house) => {
        res.send(house)
    })
})

router.post('/', (req, res) => {
    database.createImageURL(req.body)
        .then(() => {
            res.sendStatus(201)
        })
})

router.patch('/:id', (req, res) => {
    database.editImageURL(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteImageURL(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
