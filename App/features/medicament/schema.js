let medicamentSchemasJSON = {
   medicament: String,
   quantity: Number,
   value: Number
  }
  
  function getMedicamentSchema () {
    return medicamentSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getMedicamentSchema: getMedicamentSchema
  }