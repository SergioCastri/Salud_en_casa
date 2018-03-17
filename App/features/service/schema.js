let servicePublicateSchemasJSON = {
    nameClient: String,
    typeService : String,
    attended : String,
    country : String,
    city : String,
    region :String,
    lat : String,
    long : String
    
  }

  let servicesAttendedSchemasJSON = {
    nameClient: String,
    typeService : String,
    nameDoctor :String,
    attended : String,
    Observations: String,
    country : String,
    city : String,
    region :String,
    lat : String,
    long : String
    
  }
  
  
  function getServicesPublicateSchema () {
    return servicePublicateSchemasJSON
  }

  function getServicesAttendedSchema () {
    return servicesAttendedSchemasJSON
  }
  
  
  module.exports = { // Exporta todos los metodos
    getServicesPublicateSchema: getServicesPublicateSchema,
    getServicesAttendedSchema :getServicesAttendedSchema
  }