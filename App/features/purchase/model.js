let schemas = require('./schema')
let mongoose = require('mongoose')  // mongoose es algo que nos permite facilidad a la hora de manejar esquemas y hacer consultar
let schema = mongoose.Schema  

let url = 'mongodb://system:root@ds115569.mlab.com:15569/saludencasa'
let moon = mongoose.connect(url, {
  useMongoClient: true
})

function close () {
  moon.close()
}

let purchaseSchema = new schema(schemas.getPurchaseSchema())
let purchase = mongoose.model('purchase', purchaseSchema)

function getPurchase () {
  return purchase
}

module.exports = { // Exporta todos los modelos
    getPurchase: getPurchase,
  close: close
}