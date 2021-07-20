const express = require('express')
const router = express.Router()

const Use = require("../models/use.model")

router.get('/', (req, res) => {

    // Phone.find()
    //     .select('_id id name imageFileName')
    //     .then(phones => res.json({ message: phones }))
    //     .catch((error) =>
    //         res.status(500).json({
    //             code: 500,
    //             message: "Error buscando los teléfonos",
    //             error: error.message,
    //         })
    //     )
})

router.get('/:id', (req, res) => {

    // Phone.findById(req.params.id)
    //     .then(phone => res.json({ message: phone }))
    //     .catch((error) =>
    //         res.status(500).json({
    //             code: 500,
    //             message: "Error buscando el teléfono seleccionado",
    //             error: error.message,
    //         })
    //     )
})

module.exports = router