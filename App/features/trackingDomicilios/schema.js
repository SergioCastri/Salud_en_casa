let trackingSchemasJSON = {
    user : String,
    value: Number,
    messenger : String,
    timeOne: String,
    timeTwo : String,
    img : String
   }
   
   function getTrackingSchema () {
     return trackingSchemasJSON
   }
      
   module.exports = {
    getTrackingSchema: getTrackingSchema
   }