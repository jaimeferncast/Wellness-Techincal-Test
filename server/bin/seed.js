// Convert .csv files to JSON and seed the DB
require('dotenv').config({ path: '../.env' })

const mongoose = require('mongoose')
const MONGODB_URI = `${process.env.DB_HOST}/${process.env.DB_NAME}`
console.log(MONGODB_URI)
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const csv = require('csvtojson')
const csvPaths = ['../data/consumo-2018-12.csv', '../data/consumo-2019-01.csv', '../data/consumo-2019-02.csv']
const convertCsv = (path) => csv().fromFile(path)

const Use = require('../models/use.model')

Promise
  .all(csvPaths.map((path) => convertCsv(path)))
  .then((res) => {
    const uses = [...res[0], ...res[1], ...res[2]]
    return uses
  })
  .then((uses) => Use.create(uses))
  .then(() => mongoose.connection.close())
  .catch((err) => console.error(`Following error occured: \n ${err}`))
