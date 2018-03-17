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

let servicesPublicateSchema = new schema(schemas.getServicesPublicateSchema())
let servicesPublicate = mongoose.model('servicepublicates', servicesPublicateSchema)

let servicesAttendedSchema = new schema(schemas.getServicesAttendedSchema())
let servicesAttended = mongoose.model('serviceattended', servicesAttendedSchema)

function getServicePublicate () {
  return servicesPublicate
}


function getServiceAttended () {
  return servicesAttended
}


module.exports = { // Exporta todos los modelos
  getServicePublicate: getServicePublicate,
  getServiceAttended : getServiceAttended,
  close: close
}