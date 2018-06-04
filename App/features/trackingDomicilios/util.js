
let modelTracking = require('./model')
let modelPurchase = require('../purchase/model')

purchase = modelPurchase.getPurchase()
tracking = modelTracking.getTracking()

async function saveTracking(req, res) {
    await purchase.findOneAndUpdate({ nameUser: req.body.user, totalValue: req.body.value}, { $set: { state: "Inactivo" } }, function (err) {
    });
     let newTracking = new tracking({
        user: req.body.user, value: req.body.value, messenger: req.body.messenger,
        timeOne :  (new Date).getMinutes() + 10, timeTwo :  (new Date).getMinutes() + 40, 
        img: req.body.img

      })

      newTracking.save(function () {
        res.send({ "message":"guardado"})
      })
};




function getAllTracking(req, res) {
    tracking.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

function getOnlyTracking(req, res) {
    tracking.find({ user : req.body.user, value: req.body.value, messenger : req.body.messenger,
    timeOne: req.body.timeOne, timeTwo : req.body.timeTwo, img : req.body.img}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}

module.exports = { // Exporta todos los metodos
    saveTracking: saveTracking,
    getAllTracking : getAllTracking,
    getOnlyTracking : getOnlyTracking
}