const router = require('express').Router()
const database = require('../database/tenantAPI')

router.get('/', (req, res) => {
    database.getTenant()
        .then((tenant) => {
            res.send(tenant)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleTenant(req.params.id).then((tenant) => {
        res.send(tenant)
    })
})

router.post('/', (req, res) => {
    database.createTenant(req.body)
        .then(() => {
            res.sendStatus(201)
        })
})

router.patch('/:id', (req, res) => {
    database.editTenant(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteTenant(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
