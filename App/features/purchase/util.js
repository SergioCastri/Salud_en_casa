let modelPurchase = require('./model')
let modelMedicament = require('../medicament/model')

purchase = modelPurchase.getPurchase()
medicament = modelMedicament.getMedicament()


function savePurchase(req, res) {
    medicament.find({ medicament: req.body.nameMedicament }, '-_id -__v ', function (err, doc) {
        let availableQuantity = doc[0].quantity;
        let value = doc[0].value;

        if(availableQuantity < req.body.quantity){
            res.send({"message": "no se tiene esta cantidad"})
        }else{ 
           
        let newPurchase = new purchase({
            nameUser: req.body.nameUser, nameMedicament: req.body.nameMedicament,
            quantity: req.body.quantity, unitaryValue: value, totalValue: (req.body.quantity * value)

        }) 
            
        let newMedicament = new medicament({
            medicament : req.body.nameMedicament, quantity : (availableQuantity - req.body.quantity), 
            value: value
        })

        newMedicament.save(function () {
        })

        newPurchase.save(function () {
        })

        medicament.findOneAndRemove({medicament: req.body.nameMedicament, quantity: availableQuantity}, function(err) {
            res.send({"message":"compra realizada"})
        });}
  
    });
};

function getAllPurchase(req, res) {
    purchase.find({}, '-_id -__v ', function (err, doc) {
    res.status(200).jsonp(doc)
  });
}


module.exports = { // Exporta todos los metodos
    savePurchase: savePurchase,
    getAllPurchase : getAllPurchase
}