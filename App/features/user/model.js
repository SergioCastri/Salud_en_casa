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

let userAdminSchema = new schema(schemas.getUserAdminSchema())
let userAdmin = mongoose.model('UserAdmin', userAdminSchema)

let userMessengerSchema = new schema(schemas.getUserMessengerSchema())
let userMessenger = mongoose.model('UserMessenger', userMessengerSchema)


function getAdminUser () {
  return userAdmin
}
function getMessengerUser () {
  return userMessenger
}

module.exports = { // Exporta todos los modelos
    getAdminUser: getAdminUser,
    
    getMessengerUser:getMessengerUser,
  close: close
}