const router = require('express').Router()
const database = require('../database/houseAPI')

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

router.post('/', (req, res) => {
    database.createHouse(req.body)
        .then((data) => {
            res.send(data)
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
