let recordSchemasJSON = {
    user : String,
    recordOne : [{}],
    recordTwo : [{}]
   }
   
   function getRecordSchema () {
     return recordSchemasJSON
   }
   
   
   module.exports = {
    getRecordSchema: getRecordSchema
   }