let spurchaseSchemasJSON = {
    nameUser : String,
    state : String,
    medicaments: [{}],
    totalValue: Number
    
  }
  
  
  function getPurchaseSchema () {
    return spurchaseSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getPurchaseSchema: getPurchaseSchema
  }