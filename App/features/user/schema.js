
let userSchemasJSON = {
    id: String,
    name: String,
    country : String,
    user: String,
    password: String,
    job: String
  }
  
  function getUserSchema () {
    return userSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getUserSchema: getUserSchema
  }