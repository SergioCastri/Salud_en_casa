
let userAdminSchemasJSON = {
    email: String,
    name: String,
    age : String,
    user: String,
    password: String
  }
  
  function getUserAdminSchema () {
    return userAdminSchemasJSON
  }
  
  
let userMessengerSchemasJSON = {
  email: String,
  name: String,
  age : String,
  user: String,
  hours : String,
  password: String
}

function getUserMessengerSchema () {
  return userMessengerSchemasJSON
}
  
  module.exports = { // Exporta todos los metodos
    getUserAdminSchema: getUserAdminSchema, 
    getUserMessengerSchema : getUserMessengerSchema
  }