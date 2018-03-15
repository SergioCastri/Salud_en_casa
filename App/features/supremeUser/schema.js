
let supremeUserSchemasJSON = {
    id: String,
    name: String,
    country : String,
    user: String,
    password: String,
    job: String
  }
  
  function getSupremeUserSchema () {
    return supremeUserSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getSupremeUserSchema: getSupremeUserSchema
  }