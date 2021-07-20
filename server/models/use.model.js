const mongoose = require('mongoose')
const Schema = mongoose.Schema

const useSchema = new Schema({
    "Fecha": String,
    "Hora": String,
    "Consumo (Wh)": String,
    "Precio (€/kWh)": String,
    "Coste por hora (€)": String,
}, {
    timestamps: true
})

const Use = mongoose.model('Use', useSchema)
module.exports = Use