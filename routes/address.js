const router = require('express').Router()
const database = require('../database/addressAPI')

router.get('/', (req, res) => {
    database.getAddress()
        .then((address) => {
            res.send(address)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleAddress(req.params.id).then((address) => {
        res.send(address)
    })
})

router.post('/', (req, res) => {
    database.createAddress(req.body)
        .then(() => {
            res.sendStatus(201)
        })
})

router.patch('/:id', (req, res) => {
    database.editAddress(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteAddress(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
