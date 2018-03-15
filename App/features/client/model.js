let schemas = require('./schema')
let mongoose = require('mongoose')  // mongoose es algo que nos permite facilidad a la hora de manejar esquemas y hacer consultar
let schema = mongoose.Schema    // se defina una variable Schema

let url = 'mongodb://system:root@ds115569.mlab.com:15569/saludencasa'
let moon = mongoose.connect(url, {
  useMongoClient: true
})

function close () {
  moon.close()
}

let clientSchema = new schema(schemas.getClientSchema())
let client = mongoose.model('Client', clientSchema)

function getClient () {
  return client
}

module.exports = { // Exporta todos los modelos
    getClient: getClient,
  close: close
}