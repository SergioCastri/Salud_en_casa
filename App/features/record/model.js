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

let recordSchema = new schema(schemas.getRecordSchema())
let record = mongoose.model('Record', recordSchema)

function getRecord() {
  return record
}

module.exports = { // Exporta todos los modelos
    getRecord: getRecord,
  close: close
}