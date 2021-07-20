const express = require('express')
const router = express.Router()

const Use = require("../models/use.model")

router.get('/', (req, res) => {

    Use.find()
        .then(phones => res.json({ message: phones }))
        .catch((error) =>
            res.status(500).json({
                code: 500,
                message: "Error fetching usage",
                error: error.message
            })
        )
})

router.put('/:id', (req, res) => {

    Use.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json({ ...err, message: err.message }))
})

router.delete('/:_id', (req, res) => {

    Use.findByIdAndDelete(req.params._id)
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json({ ...err, message: err.message }))
})

module.exports = router
