let model = require('./model')
record = model.getRecord()



function getAllRecords(req, res) {
    record.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


module.exports = {
  getAllRecords : getAllRecords
  
  }