let modelPurchase = require('./model')
let modelMedicament = require('../medicament/model')

purchase = modelPurchase.getPurchase()
medicament = modelMedicament.getMedicament()


function savePurchase(req, res) {
    medicament.find({ medicament: req.body.nameMedicament }, '-_id -__v ', function (err, doc) {
        let availableQuantity = doc.medicament;
        let value = doc.value;

        let newPurchase = new purchase({
            id: req.body.id, nameUser: req.body.nameUser, nameMedicament: availableQuantity,
            quantity: req.body.quantity, unitaryValue: value, totalValue: (req.body.quantity * value)

        })


        newPurchase.save(function () {
            res.send({ "message": "Usuario registrado exitosamente" })
        })


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