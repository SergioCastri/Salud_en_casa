
let clientSchemasJSON = {
    name: String,
    lastName : String,
    user : String,
    email : String,
    age :Number,
    gender : String,
    password : String
  }
  
  function getClientSchema () {
    return clientSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getClientSchema: getClientSchema
  }