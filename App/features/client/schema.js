
let clientSchemasJSON = {
    name: String,
    country : String,
    city : String,
    region :String,
    lat : String,
    long : String,
    user: String,
    password: String,
    job : String
  }
  
  function getClientSchema () {
    return clientSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getClientSchema: getClientSchema
  }