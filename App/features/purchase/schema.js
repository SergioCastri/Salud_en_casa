let spurchaseSchemasJSON = {
    nameUser : String,
    medicaments: [{}],
    totalValue: Number
    
  }
  
  
  function getPurchaseSchema () {
    return spurchaseSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getPurchaseSchema: getPurchaseSchema
  }