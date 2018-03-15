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

let superUserSchema = new schema(schemas.getSuperUserSchema())
let superUser = mongoose.model('SuperUser', superUserSchema)

function getSuperUser () {
  return superUser
}

module.exports = { // Exporta todos los modelos
    getSuperUser: getSuperUser,
  close: close
}