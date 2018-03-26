let medicamentSchemasJSON = {
   medicament: String,
   category: String,
   description: String,
   characterist: String, 
   quantity: Number,
   volumen:String,
   value: Number, 
   photos : [{}]
  }
  
  function getMedicamentSchema () {
    return medicamentSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getMedicamentSchema: getMedicamentSchema
  }