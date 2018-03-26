let modelPurchase = require('./model')
let modelMedicament = require('../medicament/model')
    
purchase = modelPurchase.getPurchase()
medicament = modelMedicament.getMedicament()

async function savePurchase(req, res) {
    let i = 0;
    let j = 0;
    let totalValue2 = 0;
    let jsonMedicaments = new Array(req.body.medicaments.length)
   // console.log(req.body.medicaments.length)
    while (i < req.body.medicaments.length - 1) {
        console.log(0)
        await medicament.find({ medicament: req.body.medicaments[i].medicament }, '-_id -__v ', function (err, doc) {
            console.log(1)  
            let availableQuantity = doc[0].quantity;
            let value = doc[0].value;
            jsonMedicaments[i] = {
                    medicament : doc[0].medicament, category: doc[0].category, 
                    description:doc[0].description, characterist:doc[0].characterist, 
                    quantity : req.body.medicaments[i].quantity, volumen:doc[0].volumen,
                    value: doc[0].value, photos: doc[0].photos
            }
            //console.log("JSONNNNNNN" + jsonMedicaments)
            if(availableQuantity < req.body.medicaments[i].quantity ){
                res.send({"message": "Cantidad no disponible de" + req.body.medicaments[i].medicament })
            }
      /*      let newMedicament = new medicament({
                medicament : doc[0].medicament, category: doc[0].category, 
                description:doc[0].description, characterist:doc[0].characterist, 
                quantity : (doc[0].quantity - req.body.medicaments[i].quantity), volumen:doc[0].volumen,
                value: doc[0].value, photos: doc[0].photos
            })
            newMedicament.save(function () {
            })
            medicament.findOneAndRemove({ medicament: req.body.medicaments.medicament, quantity: availableQuantity }, function (err) {
            });*/
            console.log(2)
        }); 
        console.log(3)
        i = i + 1;
    }
    console.log(4)
    //console.log(4)
    //console.log("JSONNN " + jsonMedicaments)
    while (j< req.body.medicaments.length) {
        totalValue2 = (req.body.medicaments[j].value * req.body.medicaments[j].quantity) + totalValue2;
        j = j +1;
    }
   // console.log("JSONNN " + jsonMedicaments)

    let newPurchaseMedicament = new purchase({
        
        nameUser: req.body.nameUser, medicaments: jsonMedicaments, totalValue: totalValue2
    })
//   console.log("XXXX" + newPurchaseMedicament)

    newPurchaseMedicament.save(function () {
        res.send({ "message": "compra realizada" })
    })

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
