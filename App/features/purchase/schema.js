let spurchaseSchemasJSON = {
    id: String,
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