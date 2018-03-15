
let superUserSchemasJSON = {
    id: String,
    name: String,
    country : String,
    user: String,
    password: String,
    job: String
  }
  
  function getSuperUserSchema () {
    return superUserSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getSuperUserSchema: getSuperUserSchema
  }