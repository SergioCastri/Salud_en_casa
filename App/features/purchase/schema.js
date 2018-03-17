let spurchaseSchemasJSON = {
    nameUser: String,
    nameMedicament : String,
    quantity : Number,
    unitaryValue : Number,
    totalValue: Number
    
  }
  
  
  function getPurchaseSchema () {
    return spurchaseSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getPurchaseSchema: getPurchaseSchema
  }