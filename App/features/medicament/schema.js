let medicamentSchemasJSON = {
   medicament: String,
   category: String,
   description: String,
   characterist: String, 
   quantity: Number,
   volumen:String,
   value: Number, 
   photo: String
  }
  
  function getMedicamentSchema () {
    return medicamentSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getMedicamentSchema: getMedicamentSchema
  }